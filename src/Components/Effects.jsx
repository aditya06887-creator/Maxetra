import { useEffect, useRef } from "react";

const Effects = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particlesArray = [];
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const colors = ["#fd4f4e", "#fff", "#FFC458"];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth < 768 ? window.innerHeight * 0.6 : window.innerHeight;
    };

    setCanvasSize();

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      setCanvasSize();
      mouse.x = canvas.width / 2;
      mouse.y = canvas.height / 2;
      initParticles();
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    class Particle {
      constructor(x, y, dx, dy, size) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.size = size;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        if (this.x + this.size > canvas.width || this.x - this.size < 0) {
          this.dx = -this.dx;
        }
        if (this.y + this.size > canvas.height || this.y - this.size < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      const numParticles = (canvas.width * canvas.height) / 10000;

      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 3 + 2;
        const x = Math.random() * (canvas.width - size * 2) + size;
        const y = Math.random() * (canvas.height - size * 2) + size;
        const dx = (Math.random() - 0.5) * 1;
        const dy = (Math.random() - 0.5) * 1;

        particlesArray.push(new Particle(x, y, dx, dy, size));
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particlesArray.length; i++) {
        for (let j = i + 1; j < particlesArray.length; j++) {
          const dx = particlesArray[i].x - particlesArray[j].x;
          const dy = particlesArray[i].y - particlesArray[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.strokeStyle = "rgba(225,225,225,0.9)";
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
            ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
            ctx.stroke();
          }
        }

        const mdx = particlesArray[i].x - mouse.x;
        const mdy = particlesArray[i].y - mouse.y;
        const mDistance = Math.sqrt(mdx * mdx + mdy * mdy);

        if (mDistance < 300) {
          ctx.strokeStyle = "rgba(225,225,225,0.9)";
          ctx.lineWidth = 0.7;
          ctx.beginPath();
          ctx.moveTo(mouse.x, mouse.y);
          ctx.lineTo(particlesArray[i].x, particlesArray[i].y);
          ctx.stroke();
        }
      }
    };

    let animationFrameId;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesArray.forEach((p) => p.update());
      connectParticles();

      ctx.fillStyle = "rgba(225,225,225,0.7)";
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, 3, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ position: "relative", overflowX: "hidden" }}>
      <canvas
        ref={canvasRef}
        style={{ 
          width: "100%", 
          height: window.innerWidth < 768 ? "60vh" : "100vh", // Updated to 60vh
          display: "block" 
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
          color: "#333",
          width: "100%",
        }}
      >
      </div>
    </div>
  );
};

export default Effects;