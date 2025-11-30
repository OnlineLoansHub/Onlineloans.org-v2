'use client';

import { useEffect, useRef } from 'react';
import cls from './ConfettiCelebration.module.scss';

interface IConfettiCelebrationProps {
  isActive: boolean;
  duration?: number; // Duration in milliseconds
}

interface ConfettiParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
}

const COLORS = ['#0157ff', '#5ec189', '#2a3d66', '#ffbc99', '#cabdff', '#ff6b6b', '#4ecdc4'];

export const ConfettiCelebration = ({ isActive, duration = 2500 }: IConfettiCelebrationProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<ConfettiParticle[]>([]);
  const startTimeRef = useRef<number | null>(null);

  useEffect(() => {
    if (!isActive) {
      // Clean up when not active
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }

      particlesRef.current = [];
      startTimeRef.current = null;

      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create particles
    const createParticles = () => {
      const particleCount = 150;

      particlesRef.current = [];

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: -10,
          vx: (Math.random() - 0.5) * 4,
          vy: Math.random() * 3 + 2,
          size: Math.random() * 8 + 4,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.2,
        });
      }
    };

    createParticles();
    startTimeRef.current = Date.now();

    // Animation loop
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = startTimeRef.current ? currentTime - startTimeRef.current : 0;

      if (elapsed > duration) {
        // Animation complete
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        window.removeEventListener('resize', resizeCanvas);

        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.vy += 0.15; // Gravity
        particle.rotation += particle.rotationSpeed;

        // Draw particle
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.rotation);
        ctx.fillStyle = particle.color;
        ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
        ctx.restore();

        // Reset particle if it goes off screen
        if (particle.y > canvas.height + 10) {
          particle.y = -10;
          particle.x = Math.random() * canvas.width;
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isActive, duration]);

  if (!isActive) return null;

  return <canvas ref={canvasRef} className={cls.confettiCanvas} />;
};
