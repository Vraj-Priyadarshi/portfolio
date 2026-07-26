import React, { useEffect, useRef } from "react";

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let stars = [];
    const starCount = 150;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      for (let i = 0; i < starCount; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.2 + 0.6, // 0.6 to 1.8px
          color: Math.random() > 0.25 ? "#ffffff" : "#00f0ff", // 75% white, 25% cyan
          alpha: Math.random() * 0.9 + 0.1,
          twinkleSpeed: Math.random() * 0.012 + 0.003,
          twinkleDirection: Math.random() > 0.5 ? 1 : -1,
          vx: Math.random() * 0.04 - 0.02,
          vy: Math.random() * 0.04 - 0.02,
        });
      }
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const diff = scrollY - lastScrollY;
      lastScrollY = scrollY;

      stars.forEach((star) => {
        // Speed proportional to size (parallax depth)
        star.y -= diff * (star.radius * 0.03);
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;
      });
    };

    window.addEventListener("scroll", handleScroll);

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Update twinkling
        star.alpha += star.twinkleSpeed * star.twinkleDirection;
        if (star.alpha >= 1) {
          star.alpha = 1;
          star.twinkleDirection = -1;
        } else if (star.alpha <= 0.1) {
          star.alpha = 0.1;
          star.twinkleDirection = 1;
        }

        // Slow drift
        star.x += star.vx;
        star.y += star.vy;

        // Wrap boundaries
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.globalAlpha = star.alpha;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
        pointerEvents: "none",
        display: "block",
      }}
    />
  );
}
