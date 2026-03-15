"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Water } from 'three/examples/jsm/objects/Water.js';

export default function WaterText() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Variables
    let scene: THREE.Scene, camera: THREE.PerspectiveCamera, renderer: THREE.WebGLRenderer, controls: OrbitControls;
    let water: Water;
    let ambientLight: THREE.AmbientLight, dirLight: THREE.DirectionalLight;
    let animationFrameId: number;

    // Parameters
    const params = {
      waterColor: '#000000', // Black water
      sunColor: '#ffffff', // Bright reflection for ripples
      waterOpacity: 1.0,
      distortionScale: 3.7,
      speed: 1.0,
      bgColor: '#000000', // Black background
      lightX: -10,
      lightY: 10,
      lightZ: 10
    };

    // Initialize
    function init() {
      // 1. Scene
      scene = new THREE.Scene();
      scene.background = new THREE.Color(params.bgColor);
      scene.fog = new THREE.FogExp2(params.bgColor, 0.0025);

      // 2. Camera
      const aspect = containerRef.current!.clientWidth / containerRef.current!.clientHeight;
      camera = new THREE.PerspectiveCamera(45, aspect, 1, 1000);
      camera.position.set(0, 15, 100); 

      // 3. Renderer
      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(containerRef.current!.clientWidth, containerRef.current!.clientHeight);
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
        containerRef.current.appendChild(renderer.domElement);
      }

      // 4. Lighting
      ambientLight = new THREE.AmbientLight(0x404040, 1.0); 
      scene.add(ambientLight);

      dirLight = new THREE.DirectionalLight(0xffffff, 1.0); 
      dirLight.position.set(params.lightX, params.lightY, params.lightZ);
      scene.add(dirLight);

      // 5. Water
      const waterGeometry = new THREE.PlaneGeometry(10000, 10000);
      
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load('https://threejs.org/examples/textures/water/Water_1_M_Normal.jpg', function(texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        
        water = new Water(
          waterGeometry,
          {
            textureWidth: 512,
            textureHeight: 512,
            waterNormals: texture,
            sunDirection: dirLight.position.clone().normalize(),
            sunColor: params.sunColor,
            waterColor: params.waterColor,
            distortionScale: params.distortionScale,
            fog: scene.fog !== undefined
          }
        );

        water.rotation.x = -Math.PI / 2;
        scene.add(water);
      });

      // 7. Controls
      controls = new OrbitControls(camera, renderer.domElement);
      controls.enablePan = false;
      controls.enableZoom = false; 
      controls.minDistance = 20;
      controls.maxDistance = 200;
      controls.maxPolarAngle = Math.PI / 2 - 0.05;
      controls.autoRotate = true; // Gentle rotation for background
      controls.autoRotateSpeed = 0.5;

      window.addEventListener('resize', onWindowResize);
    }

    function onWindowResize() {
        if (!containerRef.current || !camera || !renderer) return;
        const width = containerRef.current.clientWidth;
        const height = containerRef.current.clientHeight;
        
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
    }

    function animate() {
      animationFrameId = requestAnimationFrame(animate);
      
      // Update water time
      if (water && water.material) {
        const material = water.material as THREE.ShaderMaterial;
        if (material.uniforms['time']) {
            material.uniforms['time'].value += 1.0 / 60.0 * params.speed;
        }
      }

      if (controls) controls.update();
      if (renderer && scene && camera) renderer.render(scene, camera);
    }

    init();
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onWindowResize);
      if (containerRef.current) containerRef.current.innerHTML = '';
      if (renderer) renderer.dispose();
      // Dispose other resources if needed
    };
  }, []);

  return <div ref={containerRef} className="w-full h-full min-h-[500px]" />;
}
