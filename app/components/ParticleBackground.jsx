"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;
    
    // Параметры мыши
    let mouse = { 
      x: null, 
      y: null, 
      radius: 200 
    };

    // Установка размера canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Отслеживание мыши
    const handleMouseMove = (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };
    window.addEventListener("mouseleave", handleMouseLeave);

    // Класс частицы
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 2; // Увеличенные частицы (2-5px)
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 10;
        this.speedX = (Math.random() - 0.5) * 1;
        this.speedY = (Math.random() - 0.5) * 1;
        // Красивые фиолетовые оттенки
        const colors = [
          "rgba(168, 85, 247, 0.8)",   // purple-500
          "rgba(192, 132, 252, 0.7)",  // purple-400
          "rgba(216, 180, 254, 0.6)",  // purple-300
          "rgba(139, 92, 246, 0.8)",   // violet-500
          "rgba(217, 70, 239, 0.7)",   // fuchsia-500
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.originalSize = this.size;
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        
        // Добавляем свечение
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color;
      }

      update() {
        // Постоянное плавное движение
        this.x += this.speedX;
        this.y += this.speedY;

        // Отскок от краев canvas
        if (this.x < 0) {
          this.x = 0;
          this.speedX *= -1;
        }
        if (this.x > canvas.width) {
          this.x = canvas.width;
          this.speedX *= -1;
        }
        if (this.y < 0) {
          this.y = 0;
          this.speedY *= -1;
        }
        if (this.y > canvas.height) {
          this.y = canvas.height;
          this.speedY *= -1;
        }

        // Взаимодействие с мышью - МЯГКОЕ притяжение
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          
          // Максимальное расстояние взаимодействия
          let maxDistance = mouse.radius;
          
          if (distance < maxDistance) {
            // Вычисляем направление
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            
            // Сила притяжения (слабая!)
            let force = (maxDistance - distance) / maxDistance;
            
            // Ограничиваем максимальное смещение
            let maxPull = 0.8;
            let pullStrength = Math.min(force * this.density * 0.02, maxPull);
            
            // МЯГКОЕ притяжение к мыши
            this.x += forceDirectionX * pullStrength;
            this.y += forceDirectionY * pullStrength;
            
            // Небольшое увеличение размера при приближении
            this.size = this.originalSize + (1 - distance / maxDistance) * 2;
          } else {
            // Возврат к исходному размеру
            if (this.size > this.originalSize) {
              this.size -= 0.1;
            }
          }
        }
      }
    }

    // Создание частиц
    const particlesArray = [];
    const numberOfParticles = Math.min(Math.floor((canvas.width * canvas.height) / 9000), 100);
    
    for (let i = 0; i < numberOfParticles; i++) {
      particlesArray.push(new Particle());
    }

    // Соединение частиц линиями
    const connect = () => {
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a + 1; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            let opacity = 1 - distance / 150;
            ctx.strokeStyle = `rgba(168, 85, 247, ${opacity * 0.4})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
            ctx.shadowBlur = 0; // Сброс свечения для линий
          }
        }
      }
    };

    // Соединение с мышью
    const connectToMouse = () => {
      if (mouse.x == null) return;
      
      for (let i = 0; i < particlesArray.length; i++) {
        let dx = mouse.x - particlesArray[i].x;
        let dy = mouse.y - particlesArray[i].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 200) {
          let opacity = 1 - distance / 200;
          ctx.strokeStyle = `rgba(216, 180, 254, ${opacity * 0.5})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
          ctx.stroke();
          ctx.shadowBlur = 0;
        }
      }
    };

    // Анимация
    const animate = () => {
      // Очистка canvas с полупрозрачным фоном для эффекта trail
      ctx.fillStyle = "rgba(10, 1, 24, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Сброс shadow для каждого кадра
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

    // Очистка
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ width: "100vw", height: "100vh", zIndex: 3 }}
    />
  );
}