'use client';

import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Play, Pause, ZoomIn, ZoomOut, RotateCcw, Eye, Compass } from 'lucide-react';

interface RealisticKidneyCanvasProps {
  className?: string;
}

export default function RealisticKidneyCanvas({ className }: RealisticKidneyCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // UI state for controls
  const [viewMode, setViewMode] = useState<'pair' | 'single'>('pair');
  const [isAutoRotating, setIsAutoRotating] = useState(true);
  const [showLabels, setShowLabels] = useState(false);
  const [activePreset, setActivePreset] = useState<'front' | 'back' | 'hilum' | 'free'>('front');

  // Callback refs to control 3D scene from React state
  const sceneControlRef = useRef<{
    setMode: (mode: 'pair' | 'single') => void;
    toggleAutoRotate: (enabled: boolean) => void;
    setCameraPreset: (preset: 'front' | 'back' | 'hilum') => void;
    zoom: (delta: number) => void;
    resetView: () => void;
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let animationFrameId: number;
    let width = container.clientWidth || 700;
    let height = container.clientHeight || 760;

    // SCENE & CAMERA (Sufficient distance so kidneys are perfectly framed, not overly zoomed)
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 1000);
    camera.position.set(0, 0.5, 48);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    // ORBIT CONTROLS FOR 360 ROTATION
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.minDistance = 22;
    controls.maxDistance = 75;
    controls.autoRotate = !prefersReducedMotion;
    controls.autoRotateSpeed = 0.9;
    controls.target.set(0, -0.5, 0);

    // User interaction
    controls.addEventListener('start', () => {
      setActivePreset('free');
    });

    // LIGHTING SETUP FOR REFINED MEDICAL ILLUMINATION
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const mainKeyLight = new THREE.DirectionalLight(0xfff5eb, 1.8);
    mainKeyLight.position.set(20, 24, 25);
    scene.add(mainKeyLight);

    const secondaryFillLight = new THREE.DirectionalLight(0xbad2e8, 1.15);
    secondaryFillLight.position.set(-22, -10, 18);
    scene.add(secondaryFillLight);

    const rimLightBack = new THREE.DirectionalLight(0x5E9CA0, 1.35);
    rimLightBack.position.set(0, 18, -28);
    scene.add(rimLightBack);

    const vascularGlow = new THREE.PointLight(0x0D7377, 1.2, 55);
    vascularGlow.position.set(0, 0, 3);
    scene.add(vascularGlow);

    // PROCEDURAL TEXTURE GENERATION FOR REALISTIC RENAL CAPSULE
    const createRenalTexture = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 1024;
      canvas.height = 1024;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      // Base renal parenchyma gradient (deep maroon/crimson)
      const grad = ctx.createRadialGradient(512, 512, 80, 512, 512, 600);
      grad.addColorStop(0, '#8B2232');
      grad.addColorStop(0.5, '#761A27');
      grad.addColorStop(0.85, '#63131F');
      grad.addColorStop(1, '#4E0E18');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 1024, 1024);

      // Delicate micro-vascular capillary network
      ctx.strokeStyle = 'rgba(195, 60, 80, 0.28)';
      ctx.lineWidth = 1.2;
      for (let i = 0; i < 45; i++) {
        ctx.beginPath();
        let x = Math.random() * 1024;
        let y = Math.random() * 1024;
        ctx.moveTo(x, y);
        for (let j = 0; j < 6; j++) {
          x += (Math.random() - 0.5) * 85;
          y += (Math.random() - 0.5) * 85;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Darker micro-venules
      ctx.strokeStyle = 'rgba(60, 12, 22, 0.35)';
      ctx.lineWidth = 2.0;
      for (let i = 0; i < 25; i++) {
        ctx.beginPath();
        let x = Math.random() * 1024;
        let y = Math.random() * 1024;
        ctx.moveTo(x, y);
        for (let j = 0; j < 5; j++) {
          x += (Math.random() - 0.5) * 110;
          y += (Math.random() - 0.5) * 110;
          ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      // Capsular stellate veins & subtle mottling
      ctx.fillStyle = 'rgba(230, 100, 120, 0.05)';
      for (let i = 0; i < 300; i++) {
        ctx.beginPath();
        ctx.arc(Math.random() * 1024, Math.random() * 1024, Math.random() * 12 + 2, 0, Math.PI * 2);
        ctx.fill();
      }

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    // PROCEDURAL BUMP/NORMAL MAP FOR TISSUE TEXTURE
    const createRenalBumpMap = () => {
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const ctx = canvas.getContext('2d');
      if (!ctx) return null;

      ctx.fillStyle = '#808080';
      ctx.fillRect(0, 0, 512, 512);

      const imgData = ctx.getImageData(0, 0, 512, 512);
      const data = imgData.data;
      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.floor(128 + (Math.random() - 0.5) * 38);
        data[i] = noise;
        data[i + 1] = noise;
        data[i + 2] = noise;
        data[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);

      const texture = new THREE.CanvasTexture(canvas);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.RepeatWrapping;
      return texture;
    };

    const renalColorTexture = createRenalTexture();
    const renalBumpTexture = createRenalBumpMap();

    // ANATOMICAL BIOLOGICAL KIDNEY MATERIAL
    const kidneyMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x8A2232,
      map: renalColorTexture || undefined,
      bumpMap: renalBumpTexture || undefined,
      bumpScale: 0.06,
      roughness: 0.35,
      metalness: 0.05,
      clearcoat: 0.45,
      clearcoatRoughness: 0.18,
      reflectivity: 0.65,
      transmission: 0.04,
      emissive: 0x1E0508,
      emissiveIntensity: 0.25
    });

    // VESSEL & GLAND MATERIALS
    const arteryMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xC81E2B,
      roughness: 0.32,
      metalness: 0.08,
      clearcoat: 0.4,
      clearcoatRoughness: 0.2
    });

    const veinMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x1E5BB8,
      roughness: 0.35,
      metalness: 0.08,
      clearcoat: 0.4,
      clearcoatRoughness: 0.2
    });

    const ureterMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xE8DFC9,
      roughness: 0.45,
      metalness: 0.04,
      clearcoat: 0.25,
      clearcoatRoughness: 0.3
    });

    const adrenalMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xD88A24,
      roughness: 0.65,
      metalness: 0.02
    });

    // PROCEDURAL ANATOMICAL KIDNEY GEOMETRY BUILDER
    const createAnatomicalKidneyMesh = (isRight = false) => {
      const segmentsU = 96;
      const segmentsV = 96;
      const positions: number[] = [];
      const uvs: number[] = [];
      const indices: number[] = [];

      for (let i = 0; i <= segmentsU; i++) {
        const u = (i / segmentsU) * Math.PI;
        for (let j = 0; j <= segmentsV; j++) {
          const v = (j / segmentsV) * 2 * Math.PI;

          let x = Math.sin(u) * Math.cos(v);
          let y = Math.cos(u);
          let z = Math.sin(u) * Math.sin(v);

          // Proportions: height 18.5, width 10.5, depth 7.8
          y *= 9.25;
          let rx = 5.25;
          let rz = 3.9;

          // Superior pole broader than inferior pole
          const poleAsymmetry = 1.0 + 0.14 * Math.cos(u);
          rx *= poleAsymmetry;
          rz *= poleAsymmetry;

          // Posterior surface is anatomically flatter than anterior surface
          if (z < 0) {
            z *= 0.76;
          }

          // Medial hilum indent (concave side where vessels enter/exit)
          if (Math.cos(v) < 0) {
            const hilumVertical = Math.sin(u);
            const hilumDepth = Math.pow(hilumVertical, 1.8) * Math.pow(Math.abs(Math.cos(v)), 1.25);
            x *= (1.0 - 0.64 * hilumDepth);
            z *= (1.0 - 0.24 * hilumDepth);
          }

          x *= rx;
          z *= rz;

          // Organic biological tissue surface displacement
          const organicMicroNoise =
            0.08 * Math.sin(u * 9) * Math.cos(v * 9) +
            0.04 * Math.sin(u * 18) * Math.cos(v * 18);
          x += organicMicroNoise;
          y += organicMicroNoise;
          z += organicMicroNoise;

          if (isRight) {
            x = -x;
          }

          positions.push(x, y, z);
          uvs.push(j / segmentsV, i / segmentsU);
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

      const geom = new THREE.BufferGeometry();
      geom.setIndex(indices);
      geom.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
      geom.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2));
      geom.computeVertexNormals();

      return new THREE.Mesh(geom, kidneyMaterial);
    };

    // ADRENAL GLAND (SUPRARENAL GLAND)
    const createAdrenalGland = (isRight = false) => {
      const geom = new THREE.ConeGeometry(3.2, 2.8, 16);
      geom.scale(1.2, 0.8, 0.6);
      const mesh = new THREE.Mesh(geom, adrenalMaterial);
      mesh.position.set(isRight ? -0.8 : 0.8, 9.5, 0.4);
      mesh.rotation.z = isRight ? 0.25 : -0.25;
      mesh.rotation.x = -0.15;
      return mesh;
    };

    // VESSEL & URETER TUBES BUILDER
    const createTube = (points: THREE.Vector3[], radius: number, material: THREE.Material) => {
      const curve = new THREE.CatmullRomCurve3(points);
      const geom = new THREE.TubeGeometry(curve, 32, radius, 14, false);
      return new THREE.Mesh(geom, material);
    };

    // ROOT SYSTEM GROUPS (Scaled gracefully to avoid feeling overly zoomed)
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    const bilateralGroup = new THREE.Group();
    const singleGroup = new THREE.Group();
    bilateralGroup.scale.set(0.82, 0.82, 0.82);
    singleGroup.scale.set(0.9, 0.9, 0.9);

    worldGroup.add(bilateralGroup);
    worldGroup.add(singleGroup);

    // ----------------------------------------------------
    // BUILD BILATERAL RENAL SYSTEM (PAIR + GREAT VESSELS)
    // ----------------------------------------------------
    const leftKidneyMesh = createAnatomicalKidneyMesh(false);
    leftKidneyMesh.position.set(-8.4, 0.5, 0);
    leftKidneyMesh.rotation.set(-0.06, -0.14, -0.08);

    const rightKidneyMesh = createAnatomicalKidneyMesh(true);
    // Right kidney is anatomically ~1.5cm lower due to liver footprint
    rightKidneyMesh.position.set(8.4, -0.8, 0);
    rightKidneyMesh.rotation.set(-0.06, 0.14, 0.08);

    const leftAdrenal = createAdrenalGland(false);
    leftKidneyMesh.add(leftAdrenal);

    const rightAdrenal = createAdrenalGland(true);
    rightKidneyMesh.add(rightAdrenal);

    bilateralGroup.add(leftKidneyMesh);
    bilateralGroup.add(rightKidneyMesh);

    // CENTRAL GREAT VESSELS (AORTA & INFERIOR VENA CAVA)
    const aortaGeom = new THREE.CylinderGeometry(1.05, 0.95, 26, 24);
    const aortaMesh = new THREE.Mesh(aortaGeom, arteryMaterial);
    aortaMesh.position.set(-1.1, -1.0, -0.6);
    bilateralGroup.add(aortaMesh);

    const ivcGeom = new THREE.CylinderGeometry(1.25, 1.15, 26, 24);
    const ivcMesh = new THREE.Mesh(ivcGeom, veinMaterial);
    ivcMesh.position.set(1.2, -1.0, 0.2);
    bilateralGroup.add(ivcMesh);

    // RENAL ARTERIES (RED)
    const leftArtery = createTube([
      new THREE.Vector3(-1.1, 1.8, -0.5),
      new THREE.Vector3(-4.5, 1.4, -0.3),
      new THREE.Vector3(-6.8, 0.9, -0.1)
    ], 0.5, arteryMaterial);

    const rightArtery = createTube([
      new THREE.Vector3(-1.1, 0.6, -0.7),
      new THREE.Vector3(2.5, 0.3, -0.8), // passes posterior to IVC
      new THREE.Vector3(6.8, -0.3, -0.1)
    ], 0.5, arteryMaterial);

    bilateralGroup.add(leftArtery);
    bilateralGroup.add(rightArtery);

    // RENAL VEINS (BLUE)
    const leftVein = createTube([
      new THREE.Vector3(-6.8, 0.3, 0.5),
      new THREE.Vector3(-3.2, 0.8, 0.6), // crosses anterior to aorta
      new THREE.Vector3(1.2, 1.2, 0.3)
    ], 0.65, veinMaterial);

    const rightVein = createTube([
      new THREE.Vector3(6.8, -0.9, 0.5),
      new THREE.Vector3(4.0, -0.6, 0.4),
      new THREE.Vector3(1.2, -0.4, 0.3)
    ], 0.65, veinMaterial);

    bilateralGroup.add(leftVein);
    bilateralGroup.add(rightVein);

    // URETERS (DESCENDING URINARY DUCTS - AMBER)
    const leftUreter = createTube([
      new THREE.Vector3(-6.6, -0.6, 0.2),
      new THREE.Vector3(-5.2, -4.5, 0.1),
      new THREE.Vector3(-4.0, -9.0, 0.0),
      new THREE.Vector3(-2.8, -13.5, -0.2)
    ], 0.38, ureterMaterial);

    const rightUreter = createTube([
      new THREE.Vector3(6.6, -1.9, 0.2),
      new THREE.Vector3(5.2, -5.5, 0.1),
      new THREE.Vector3(4.0, -9.8, 0.0),
      new THREE.Vector3(2.8, -13.5, -0.2)
    ], 0.38, ureterMaterial);

    bilateralGroup.add(leftUreter);
    bilateralGroup.add(rightUreter);

    // ----------------------------------------------------
    // BUILD SINGLE DETAILED KIDNEY VIEW (FOCUSED ANATOMY)
    // ----------------------------------------------------
    const singleKidneyMesh = createAnatomicalKidneyMesh(false);
    singleKidneyMesh.scale.set(1.05, 1.05, 1.05);
    singleGroup.add(singleKidneyMesh);

    const singleAdrenal = createAdrenalGland(false);
    singleKidneyMesh.add(singleAdrenal);

    const singleArtery = createTube([
      new THREE.Vector3(7.0, 1.8, -0.3),
      new THREE.Vector3(3.5, 1.2, -0.2),
      new THREE.Vector3(0.5, 0.5, -0.1)
    ], 0.6, arteryMaterial);

    const singleVein = createTube([
      new THREE.Vector3(0.5, -0.2, 0.5),
      new THREE.Vector3(4.0, 0.4, 0.6),
      new THREE.Vector3(7.0, 0.9, 0.5)
    ], 0.75, veinMaterial);

    const singleUreter = createTube([
      new THREE.Vector3(0.8, -1.2, 0.1),
      new THREE.Vector3(2.4, -5.0, 0.0),
      new THREE.Vector3(3.2, -10.0, -0.1),
      new THREE.Vector3(3.8, -14.0, -0.2)
    ], 0.45, ureterMaterial);

    singleGroup.add(singleArtery);
    singleGroup.add(singleVein);
    singleGroup.add(singleUreter);

    // Initial visibility according to viewMode
    singleGroup.visible = false;
    bilateralGroup.visible = true;

    // AMBIENT FLOATING GLOMERULAR PARTICLES
    const particlesCount = 100;
    const particlesGeom = new THREE.BufferGeometry();
    const posArray = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 60;
    }
    particlesGeom.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMat = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x5E9CA0,
      transparent: true,
      opacity: 0.35
    });
    const particlesMesh = new THREE.Points(particlesGeom, particlesMat);
    scene.add(particlesMesh);

    // TARGET CAMERA POSITIONS (Proportional, comfortable distance)
    const targetCameraPos = new THREE.Vector3(0, 0.5, 48);
    const targetLookAt = new THREE.Vector3(0, -0.5, 0);

    // ATTACH SCENE CONTROL API FOR REACT STATE
    sceneControlRef.current = {
      setMode: (mode) => {
        if (mode === 'pair') {
          bilateralGroup.visible = true;
          singleGroup.visible = false;
          targetCameraPos.set(0, 0.5, 48);
          targetLookAt.set(0, -0.5, 0);
        } else {
          bilateralGroup.visible = false;
          singleGroup.visible = true;
          targetCameraPos.set(1.5, 0, 36);
          targetLookAt.set(0.5, 0, 0);
        }
      },
      toggleAutoRotate: (enabled) => {
        controls.autoRotate = enabled;
      },
      setCameraPreset: (preset) => {
        if (preset === 'front') {
          targetCameraPos.set(0, 0.5, 46);
          targetLookAt.set(0, -0.5, 0);
        } else if (preset === 'back') {
          targetCameraPos.set(0, 0.5, -46);
          targetLookAt.set(0, -0.5, 0);
        } else if (preset === 'hilum') {
          targetCameraPos.set(36, 2, 16);
          targetLookAt.set(0, -0.5, 0);
        }
      },
      zoom: (delta) => {
        const factor = delta > 0 ? 0.88 : 1.14;
        camera.position.multiplyScalar(factor);
        camera.updateProjectionMatrix();
      },
      resetView: () => {
        targetCameraPos.set(0, 0.5, 48);
        targetLookAt.set(0, -0.5, 0);
        camera.position.set(0, 0.5, 48);
        controls.target.set(0, -0.5, 0);
        controls.update();
      }
    };

    // ANIMATION LOOP
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      // Smooth camera interpolation towards preset
      camera.position.lerp(targetCameraPos, 0.05);
      controls.target.lerp(targetLookAt, 0.05);

      // Organic physiological breathing pulse
      const time = Date.now() * 0.001;
      const pulse = Math.sin(time * 1.3) * 0.03 + 1.0;

      if (bilateralGroup.visible) {
        leftKidneyMesh.scale.set(pulse, pulse, pulse);
        rightKidneyMesh.scale.set(pulse, pulse, pulse);
      } else {
        singleKidneyMesh.scale.set(1.05 * pulse, 1.05 * pulse, 1.05 * pulse);
      }

      // Sync emissive warmth with the pulse
      kidneyMaterial.emissiveIntensity = 0.2 + (Math.sin(time * 1.3) + 1.0) * 0.1;

      particlesMesh.rotation.y -= 0.0005;

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // RESIZE LISTENER
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      if (width === 0 || height === 0) return;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      controls.dispose();
      renderer.dispose();
      if (container && renderer.domElement && renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  // Update mode when state changes
  const handleModeChange = (mode: 'pair' | 'single') => {
    setViewMode(mode);
    sceneControlRef.current?.setMode(mode);
  };

  // Toggle Auto-rotation
  const handleToggleAutoRotate = () => {
    const next = !isAutoRotating;
    setIsAutoRotating(next);
    sceneControlRef.current?.toggleAutoRotate(next);
  };

  // Preset angle selection
  const handlePresetChange = (preset: 'front' | 'back' | 'hilum') => {
    setActivePreset(preset);
    sceneControlRef.current?.setCameraPreset(preset);
  };

  return (
    <div className={`relative w-full h-full select-none ${className || ''}`}>
      {/* 3D WebGL Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full cursor-grab active:cursor-grabbing"
        title="Click and drag to rotate 360 degrees in any direction"
      />

      {/* TOP 360° SLEEK BADGE OVERLAY */}
      <div className="absolute top-5 right-5 sm:right-8 z-20 flex items-center gap-2.5 px-4 py-2 rounded-full bg-navy/70 backdrop-blur-md border border-white/20 text-white shadow-lg pointer-events-auto">
        <Compass
          className={`w-4 h-4 text-coral ${isAutoRotating ? 'animate-spin' : ''}`}
          style={{ animationDuration: '6s' }}
        />
        <span className="text-xs font-bold uppercase tracking-wider text-white">
          360° Interactive View
        </span>
        <span className="text-[10px] text-teal font-semibold hidden md:inline">• Drag to rotate</span>
      </div>

      {/* FLOATING ANATOMICAL LABELS (Collapsible toggle for pristine aesthetics) */}
      {showLabels && (
        <div className="absolute top-18 right-5 sm:right-8 z-20 space-y-2 pointer-events-none hidden sm:block animate-fadeIn">
          <div className="bg-navy/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-white text-xs shadow-lg max-w-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#8A2232] inline-block mr-2" />
            <strong className="text-white">Renal Cortex &amp; Capsule</strong>
            <span className="text-white/60 block text-[10px]">Blood filtration &amp; vital hormones</span>
          </div>

          <div className="bg-navy/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-white text-xs shadow-lg max-w-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C81E2B] inline-block mr-2" />
            <strong className="text-white">Renal Artery &amp; Aorta</strong>
            <span className="text-white/60 block text-[10px]">Oxygenated blood supply</span>
          </div>

          <div className="bg-navy/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-white text-xs shadow-lg max-w-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1E5BB8] inline-block mr-2" />
            <strong className="text-white">Renal Vein &amp; Vena Cava</strong>
            <span className="text-white/60 block text-[10px]">Purified venous drainage</span>
          </div>

          <div className="bg-navy/85 backdrop-blur-md border border-white/15 px-3 py-1.5 rounded-xl text-white text-xs shadow-lg max-w-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8DFC9] inline-block mr-2" />
            <strong className="text-white">Renal Pelvis &amp; Ureter</strong>
            <span className="text-white/60 block text-[10px]">Continuous urinary drainage</span>
          </div>
        </div>
      )}

      {/* BOTTOM COMPACT 360 CONTROLS BAR */}
      <div className="absolute bottom-5 inset-x-5 sm:inset-x-8 z-20 flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
        {/* Model Mode Switcher: Pair vs Single */}
        <div className="flex items-center bg-navy/80 backdrop-blur-md border border-white/20 p-1 rounded-xl shadow-lg">
          <button
            type="button"
            onClick={() => handleModeChange('pair')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'pair'
                ? 'bg-teal text-white shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Bilateral Pair
          </button>
          <button
            type="button"
            onClick={() => handleModeChange('single')}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              viewMode === 'single'
                ? 'bg-teal text-white shadow-sm'
                : 'text-white/70 hover:text-white'
            }`}
          >
            Single Kidney
          </button>
        </div>

        {/* Preset Angle Buttons */}
        <div className="hidden lg:flex items-center gap-1.5 bg-navy/80 backdrop-blur-md border border-white/20 p-1 rounded-xl shadow-lg text-xs text-white">
          <span className="text-[10px] text-white/50 uppercase px-2 font-bold">Angle:</span>
          <button
            type="button"
            onClick={() => handlePresetChange('front')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              activePreset === 'front' ? 'bg-white/25 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Front
          </button>
          <button
            type="button"
            onClick={() => handlePresetChange('back')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              activePreset === 'back' ? 'bg-white/25 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Back
          </button>
          <button
            type="button"
            onClick={() => handlePresetChange('hilum')}
            className={`px-2.5 py-1 rounded-md font-semibold transition-all cursor-pointer ${
              activePreset === 'hilum' ? 'bg-white/25 text-white' : 'text-white/70 hover:text-white'
            }`}
          >
            Medial Hilum
          </button>
        </div>

        {/* Action Controls: Auto-rotate, Zoom, Labels */}
        <div className="flex items-center gap-1.5 bg-navy/80 backdrop-blur-md border border-white/20 p-1 rounded-xl shadow-lg">
          {/* Auto Rotate Toggle */}
          <button
            type="button"
            onClick={handleToggleAutoRotate}
            title={isAutoRotating ? 'Pause 360° Rotation' : 'Start 360° Rotation'}
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1.5 text-xs px-2.5"
          >
            {isAutoRotating ? <Pause className="w-3.5 h-3.5 text-coral" /> : <Play className="w-3.5 h-3.5 text-teal" />}
            <span className="hidden sm:inline font-semibold">{isAutoRotating ? '360° Auto' : 'Rotate'}</span>
          </button>

          {/* Toggle Labels */}
          <button
            type="button"
            onClick={() => setShowLabels(!showLabels)}
            title="Toggle Anatomy Callouts"
            className={`p-1.5 rounded-lg transition-colors cursor-pointer hidden sm:block ${
              showLabels ? 'text-teal bg-white/15' : 'text-white/60 hover:text-white'
            }`}
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Zoom In */}
          <button
            type="button"
            onClick={() => sceneControlRef.current?.zoom(1)}
            title="Zoom In"
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
          </button>

          {/* Zoom Out */}
          <button
            type="button"
            onClick={() => sceneControlRef.current?.zoom(-1)}
            title="Zoom Out"
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <ZoomOut className="w-4 h-4" />
          </button>

          {/* Reset Camera */}
          <button
            type="button"
            onClick={() => {
              setActivePreset('front');
              sceneControlRef.current?.resetView();
            }}
            title="Reset 360 View"
            className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
