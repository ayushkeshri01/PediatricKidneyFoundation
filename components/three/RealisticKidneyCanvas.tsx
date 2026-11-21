'use client';

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface RealisticKidneyCanvasProps {
  className?: string;
}

export default function RealisticKidneyCanvas({ className }: RealisticKidneyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let animationFrameId: number;
    const width = container.clientWidth || 600;
    const height = container.clientHeight || 700;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // Procedural Organic Kidney Geometry
    const isMobile = window.innerWidth < 768;
    const segmentsU = isMobile ? 64 : 128;
    const segmentsV = isMobile ? 32 : 64;
    const positions: number[] = [];
    const colors: number[] = [];
    const indices: number[] = [];

    for (let i = 0; i <= segmentsU; i++) {
      const u = (i / segmentsU) * Math.PI;
      for (let j = 0; j <= segmentsV; j++) {
        const v = (j / segmentsV) * 2 * Math.PI;

        let x = Math.sin(u) * Math.cos(v);
        let y = Math.cos(u);
        let z = Math.sin(u) * Math.sin(v);

        // Proportions: 25h x 15w x 12d
        y *= 12.5;
        const radius = 7.5;

        // Medial Hilum Indent (Concave side)
        if (Math.cos(v) < 0) {
          const indentFactor = Math.sin(u);
          x *= (1 - 0.45 * Math.pow(indentFactor, 1.5));
          z *= (1 - 0.15 * indentFactor);
        }

        x *= radius;
        z *= radius * 0.7;

        // Add subtle organic surface noise
        const noise = Math.sin(u * 10) * Math.cos(v * 10) * 0.2;
        positions.push(x + noise, y + noise, z + noise);

        // Vertex Colors: Teal (Exterior) to Coral (Hilum)
        const color = new THREE.Color(0x0D7377);
        if (Math.cos(v) < -0.4) {
          const hilumStrength = Math.abs(Math.cos(v)) * Math.sin(u);
          color.lerp(new THREE.Color(0xE8714B), hilumStrength * 0.6);
        }
        colors.push(color.r, color.g, color.b);
      }
    }

    for (let i = 0; i < segmentsU; i++) {
      for (let j = 0; j < segmentsV; j++) {
        const a = i * (segmentsV + 1) + j;
        const b = i * (segmentsV + 1) + (j + 1);
        const c = (i + 1) * (segmentsV + 1) + (j + 1);
        const d = (i + 1) * (segmentsV + 1) + j;
        indices.push(a, b, d);
        indices.push(b, c, d);
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setIndex(indices);
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geometry.computeVertexNormals();

    const material = new THREE.MeshPhongMaterial({
      vertexColors: true,
      emissive: 0x1E3A5F,
      emissiveIntensity: 0.3,
      specular: 0x5E9CA0,
      shininess: 35,
      transparent: true,
      opacity: 0.92,
      side: THREE.FrontSide
    });

    const kidney = new THREE.Mesh(geometry, material);
    scene.add(kidney);

    // Particle System
    const particlesCount = isMobile ? 80 : 180;
    const particlesGeometry = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 60;
    }
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.25,
      color: 0xE8714B, // Coral
      transparent: true,
      opacity: 0.55
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xffffff, 1.3);
    mainLight.position.set(20, 15, 20);
    scene.add(mainLight);

    const rimLight = new THREE.PointLight(0x5E9CA0, 1.2);
    rimLight.position.set(-20, -15, -20);
    scene.add(rimLight);

    const internalGlow = new THREE.PointLight(0x0D7377, 1.2);
    internalGlow.position.set(0, 0, 0);
    scene.add(internalGlow);

    // Mouse Interaction
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Organic Breathing Pulse
      const time = Date.now() * 0.001;
      const pulse = Math.sin(time * 1.2) * 0.05 + 1;
      kidney.scale.set(pulse, pulse, pulse);

      // Sync emissive glow with pulse
      material.emissiveIntensity = 0.2 + (Math.sin(time * 1.2) + 1) * 0.2;

      // Organic Rotation
      kidney.rotation.y += 0.003;
      kidney.rotation.z += 0.001;

      particlesMesh.rotation.y -= 0.001;

      // Smooth Mouse Interaction (Tilting)
      const targetX = mouseY * 0.4;
      const targetY = mouseX * 0.4;
      kidney.rotation.x += (targetX - kidney.rotation.x) * 0.1;
      kidney.rotation.y += (targetY - kidney.rotation.y) * 0.1;

      renderer.render(scene, camera);
    };

    animate();

    // Handle Resize
    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth;
      const newHeight = container.clientHeight;
      if (newWidth === 0 || newHeight === 0) return;

      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      geometry.dispose();
      material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
      if (container && renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      id="renal-canvas-container"
      ref={containerRef}
      className={className || "w-full h-full"}
      aria-hidden="true"
    />
  );
}
