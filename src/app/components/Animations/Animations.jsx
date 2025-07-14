"use client";

import React, { useEffect, useRef } from "react";
import Matter from "matter-js";

const labels = [
  "Social Media",
  "Cyber Security",
  "SEO Services",
  "Web Development",
  "Ads Management",
  "Web Design",
  "Content Writing",
  "Pitch Deck",
  "UI/UX Design",
  "Branding",
];

const colors = [
  "#d8c0ff",   //	Pale Lavender 
  "#d8c0ff",   //	Pale Lavender 
  "#eaeaea",   //	Very Light Gray
  "#ffc29f", //  Light Orange
  "#ffe3d3",  //  Light Peach
  "#a7ff9f", //  Light Green
  "#c3f2d1", //  Light Mint
  "#a7ff9f", //  Light Green
  "#dbefe8",  //  Light Aqua
  "#8330c2", // Dark Purple
  "#010102", // Very Dark Gray
];

const MatterScene = () => {
  const sceneRef = useRef(null);

  useEffect(() => {
    const engine = Matter.Engine.create();
    const world = engine.world;

    let width = window.innerWidth;
    let height = window.innerHeight;

    const render = Matter.Render.create({
      element: sceneRef.current,
      engine,
      options: {
        width,
        height,
        wireframes: false,
        background: "transparent",
        showVelocity: false,
        showAngleIndicator: false,
        showDebug: false,
        showBounds: false,
        showBroadphase: false,
        showIds: false,
        showSeparations: false,
        showCollisions: false,
        showVertexNumbers: false,
        showConvexHulls: false,
        showInternalEdges: false,
      },
    });

    if (render.canvas) {
      render.canvas.style.position = "absolute";
      render.canvas.style.top = "0";
      render.canvas.style.left = "0";
      render.canvas.style.width = "100%";
      render.canvas.style.height = "100%";
      render.canvas.style.border = "none";
      render.canvas.style.outline = "none";
      render.canvas.style.background = "transparent";
      render.canvas.style.display = "block";
      render.canvas.style.boxSizing = "border-box";
      render.canvas.style.margin = "0";
      render.canvas.style.padding = "0";
    }

    Matter.Render.run(render);
    const runner = Matter.Runner.create();
    Matter.Runner.run(runner, engine);

    const createWalls = () => [
      Matter.Bodies.rectangle(width / 2, height + 10, width, 20, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
          lineWidth: 0,
          visible: false
        }
      }),
      Matter.Bodies.rectangle(-10, height / 2, 20, height, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
          lineWidth: 0,
          visible: false
        }
      }),
      Matter.Bodies.rectangle(width + 10, height / 2, 20, height, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
          lineWidth: 0,
          visible: false
        }
      }),
      Matter.Bodies.rectangle(width / 2, -10, width, 20, {
        isStatic: true,
        render: {
          fillStyle: "transparent",
          strokeStyle: "transparent",
          lineWidth: 0,
          visible: false
        }
      }),
    ];

    let walls = createWalls();
    Matter.World.add(world, walls);

    const bodies = labels.map((label, index) => {
      const x = Math.random() * (width - 160) + 96;
      const y = Math.random() * (height - 100) + 52;
      const color = colors[index % colors.length];

      const body = Matter.Bodies.rectangle(x, y, 170, 50, {
        restitution: 0.9,
        chamfer: { radius: 11 },
        render: {
          fillStyle: color,
          strokeStyle: "transparent",
          lineWidth: 0,
        },
      });

      body.labelText = label;
      body.labelColor = ["#8330c2", "#FF0000", "#010102"].includes(color)
        ? "#ffffff"
        : "#000000";

      return body;
    });

    Matter.World.add(world, bodies);

    const mouse = Matter.Mouse.create(render.canvas);

    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

    // assume you have: render and mouseConstraint already created

let scrollTimeout;
const canvas = render.canvas;

// disable canvas interaction while scrolling
canvas.addEventListener("wheel", () => {
  canvas.style.pointerEvents = "none";
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => {
    canvas.style.pointerEvents = "auto";
  }, 150);  // ~150 ms after scroll stops
}, { passive: true });



    Matter.World.add(world, mouseConstraint);
    render.mouse = mouse;

    Matter.Events.on(render, "afterRender", () => {
      const ctx = render.context;
      ctx.font = "18px DM Sans, sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      bodies.forEach((body) => {
        const pos = body.position;
        ctx.save();
        ctx.translate(pos.x, pos.y);
        ctx.rotate(body.angle);
        ctx.fillStyle = body.labelColor;
        ctx.fillText(body.labelText, 0, 0);
        ctx.restore();
      });
    });

    // Handle responsive resizing
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;

      render.bounds.max.x = width;
      render.bounds.max.y = height;
      render.options.width = width;
      render.options.height = height;
      render.canvas.width = width;
      render.canvas.height = height;

      Matter.World.remove(world, walls);
      walls = createWalls();
      Matter.World.add(world, walls);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      Matter.Render.stop(render);
      Matter.Runner.stop(runner);
      Matter.World.clear(world, false);
      Matter.Engine.clear(engine);
      render.canvas.remove();
      render.textures = {};
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      ref={sceneRef}
      className="w-full h-full relative"
      style={{
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        background: "transparent",
        zIndex: 0,           // below your UI
        pointerEvents: "auto", // allow interaction
         }}
    />
  );
};

export default MatterScene;
