import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MotionBackground() {
  const mountRef = useRef(null);
  const cursorRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const width = mount.clientWidth;
    const height = mount.clientHeight;

    // Scene, camera, renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.z = 400;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000010, 1);
    mount.appendChild(renderer.domElement);

    // --- Create soft glowing background particles ---
    const particleCount = 800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const color1 = new THREE.Color(0x00ffff); // soft cyan
    const color2 = new THREE.Color(0x9b00ff); // magenta

    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 600 - 300;
      const heightPos = (Math.random() - 0.5) * 400;
      const depth = (Math.random() - 0.5) * 800;

      positions[i * 3] = radius;
      positions[i * 3 + 1] = heightPos;
      positions[i * 3 + 2] = depth;

      const color = color1.clone().lerp(color2, Math.random());
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Glowy point texture
    const particleTexture = new THREE.TextureLoader().load(
      "https://threejs.org/examples/textures/sprites/disc.png"
    );

    const material = new THREE.PointsMaterial({
      size: 4,
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      opacity: 0.85,
      map: particleTexture,
      alphaTest: 0.01,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // --- Cursor parallax movement ---
    let mouseX = 0, mouseY = 0;
    const moveCursor = (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * -2;

      const cursor = cursorRef.current;
      if (cursor) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", moveCursor);

    // --- Animation loop ---
    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);

      const pos = geometry.attributes.position.array;
      for (let i = 0; i < particleCount; i++) {
        pos[i * 3 + 1] += Math.sin(Date.now() * 0.0003 + i) * 0.02;
      }
      geometry.attributes.position.needsUpdate = true;

      camera.position.x += (mouseX * 50 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 25 - camera.position.y) * 0.05;

      particles.rotation.y += 0.0002;

      renderer.render(scene, camera);
    };
    animate();

    // Resize handler
    const handleResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", moveCursor);
      geometry.dispose();
      material.dispose();
      if (renderer.domElement && mount.contains(renderer.domElement))
        mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <>
      <div
        ref={mountRef}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          overflow: "hidden",
          cursor: "none", // Hide default cursor
        }}
      />
      {/* ✅ Custom Spaceship Cursor (from public/spaceship.png) */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          width: "42px",
          height: "42px",
          background: "url('/spaceship.png') no-repeat center/contain",
          pointerEvents: "none",
          transform: "translate(-50%, -50%)",
          zIndex: 9999,
        }}
      />
    </>
  );
}
