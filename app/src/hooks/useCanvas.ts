import { useRef, useEffect, useCallback } from 'react';

export function useRGBCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const animRef = useRef<number>(0);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseRef.current.x = e.clientX / window.innerWidth;
    mouseRef.current.y = e.clientY / window.innerHeight;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.innerWidth < 768;
    const scale = isMobile ? 0.25 : 0.4;

    const resize = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      canvas.width = rect.width * scale;
      canvas.height = rect.height * scale;
    };

    resize();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);

    const CELL_SIZE = 18;
    const DIFFUSION_SPEED = 0.006;
    let time = 0;

    const draw = () => {
      time += DIFFUSION_SPEED;
      const w = canvas.width;
      const h = canvas.height;
      const cols = Math.ceil(w / CELL_SIZE);
      const rows = Math.ceil(h / CELL_SIZE);

      ctx.fillStyle = '#071A2B';
      ctx.fillRect(0, 0, w, h);

      const mouseOffsetX = (mouseRef.current.x - 0.5) * 6;
      const mouseOffsetY = (mouseRef.current.y - 0.5) * 4;

      for (let cy = 0; cy < rows; cy++) {
        const y = cy * CELL_SIZE;
        const gridY = cy / rows;

        for (let cx = 0; cx < cols; cx++) {
          const x = cx * CELL_SIZE;
          const gridX = cx / cols;

          const distX = Math.abs(gridX - 0.5);
          const distY = Math.abs(gridY - 0.5);
          const radius = Math.sqrt(distX * distX + distY * distY);
          const noise = Math.sin(gridX * 8 + time) * Math.cos(gridY * 8 + time * 0.8);
          const chaosStrength = Math.max(0, (radius - 0.25) * 3);
          const chaos = noise * chaosStrength * 8;
          const size = CELL_SIZE * 0.6 * (1 - radius * 0.5);

          // Red pass
          ctx.fillStyle = 'rgba(255, 50, 50, 0.5)';
          const offsetRed = -2 - chaos;
          ctx.fillRect(
            x + offsetRed - mouseOffsetX,
            y + Math.sin(time + gridY * 4) * 1.5 - mouseOffsetY,
            size,
            size
          );

          // Green pass
          ctx.fillStyle = 'rgba(50, 255, 50, 0.5)';
          const offsetGreen = chaos * 0.3;
          ctx.fillRect(
            x + offsetGreen - mouseOffsetX,
            y + Math.cos(time + gridX * 4) * 1 - mouseOffsetY,
            size,
            size
          );

          // Blue pass
          ctx.fillStyle = 'rgba(50, 50, 255, 0.5)';
          const offsetBlue = 2 + chaos;
          ctx.fillRect(
            x + offsetBlue - mouseOffsetX,
            y + Math.sin(time * 0.7 + gridX * 3) * 1.2 - mouseOffsetY,
            size,
            size
          );
        }
      }

      animRef.current = requestAnimationFrame(draw);
    };

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReduced) {
      animRef.current = requestAnimationFrame(draw);
    } else {
      // Draw one static frame
      time = 0;
      let w = canvas.width;
      let h = canvas.height;
      let cols = Math.ceil(w / CELL_SIZE);
      let rows = Math.ceil(h / CELL_SIZE);
      ctx.fillStyle = '#071A2B';
      ctx.fillRect(0, 0, w, h);
      for (let cy = 0; cy < rows; cy++) {
        const y = cy * CELL_SIZE;
        const gridY = cy / rows;
        for (let cx = 0; cx < cols; cx++) {
          const x = cx * CELL_SIZE;
          const gridX = cx / cols;
          const distX = Math.abs(gridX - 0.5);
          const distY = Math.abs(gridY - 0.5);
          const radius = Math.sqrt(distX * distX + distY * distY);
          const noise = Math.sin(gridX * 8) * Math.cos(gridY * 8);
          const chaosStrength = Math.max(0, (radius - 0.25) * 3);
          const chaos = noise * chaosStrength * 8;
          const size = CELL_SIZE * 0.6 * (1 - radius * 0.5);
          ctx.fillStyle = 'rgba(255, 50, 50, 0.5)';
          ctx.fillRect(x + (-2 - chaos), y, size, size);
          ctx.fillStyle = 'rgba(50, 255, 50, 0.5)';
          ctx.fillRect(x + (chaos * 0.3), y, size, size);
          ctx.fillStyle = 'rgba(50, 50, 255, 0.5)';
          ctx.fillRect(x + (2 + chaos), y, size, size);
        }
      }
    }

    return () => {
      cancelAnimationFrame(animRef.current);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [handleMouseMove]);

  return canvasRef;
}
