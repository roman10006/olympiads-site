"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground({ isDark }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let mouse = { x: null, y: null, radius: 200 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const handleMouseMove = (e) => { mouse.x = e.x; mouse.y = e.y; };
    window.addEventListener("mousemove", handleMouseMove);
    const handleMouseLeave = () => { mouse.x = null; mouse.y = null; };
    window.addEventListener("mouseleave", handleMouseLeave);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2;
        this.density = Math.random() * 30 + 10;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        this.originalSize = this.size;
        
        // Цвета зависят от темы
        if (isDark) {
          const colors = ["rgba(168, 85, 247, 0.8)", "rgba(192, 132, 252, 0.7)", "rgba(216, 180, 254, 0.6)", "rgba(139, 92, 246, 0.8)"];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        } else {
          const colors = ["rgba(147, 51, 234, 0.6)", "rgba(167, 139, 250, 0.5)", "rgba(196, 181, 253, 0.5)", "rgba(126, 34, 206, 0.6)"];
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;

        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          let maxDistance = mouse.radius;
          
          if (distance < maxDistance) {
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            let force = (maxDistance - distance) / maxDistance;
            let pullStrength = Math.min(force * this.density * 0.02, 0.8);
            
            this.x += forceDirectionX * pullStrength;
            this.y += forceDirectionY * pullStrength;
            this.size = this.originalSize + (1 - distance / maxDistance) * 2;
          } else {
            if (this.size > this.originalSize) this.size -= 0.1;
          }
        }
      }
    }

    const particlesArray = [];
    const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 100);
    for (let i = 0; i < numberOfParticles; i++) particlesArray.push(new Particle());

    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            let opacity = 1 - distance / 150;
            ctx.strokeStyle = isDark ? `rgba(168, 85, 247, ${opacity * 0.4})` : `rgba(147, 51, 234, ${opacity * 0.3})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
            ctx.shadowBlur = 0;
          }
        }
      }
    };

    const connectToMouse = () => {
      if (mouse.x == null) return;
      for (let i = 0; i < particlesArray.length; i++) {
        let dx = mouse.x - particlesArray[i].x;
        let dy = mouse.y - particlesArray[i].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          let opacity = 1 - distance / 200;
          ctx.strokeStyle = isDark ? `rgba(216, 180, 254, ${opacity * 0.5})` : `rgba(167, 139, 250, ${opacity * 0.4})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // Лёгкий шлейф
      ctx.fillStyle = isDark ? "rgba(10, 1, 24, 0.1)" : "rgba(250, 245, 255, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.shadowBlur = 0;
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }
      connect();
      connectToMouse();
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDark]); // Пересоздаём при смене темы

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ width: "100vw", height: "100vh" }} />;
}