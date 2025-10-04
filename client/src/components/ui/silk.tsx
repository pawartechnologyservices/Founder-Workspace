"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Silk: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mount = mountRef.current;
    if (!mount) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mount.appendChild(renderer.domElement);

    // Silk-like geometry
    const geometry = new THREE.PlaneGeometry(20, 20, 70, 70);
    const material = new THREE.MeshStandardMaterial({
      color: 0xff0077,
      side: THREE.DoubleSide,
      wireframe: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Lighting
    const light = new THREE.PointLight(0xffffff, 1);
    light.position.set(0, 10, 10);
    scene.add(light);

    camera.position.z = 15;

    let clock = new THREE.Clock();

    function animate() {
      requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Wave effect
      for (let i = 0; i < geometry.attributes.position.count; i++) {
        const x = geometry.attributes.position.getX(i);
        const y = geometry.attributes.position.getY(i);
        geometry.attributes.position.setZ(
          i,
          Math.sin(x * 0.5 + t) * 0.5 + Math.cos(y * 0.5 + t) * 0.5
        );
      }
      geometry.attributes.position.needsUpdate = true;

      mesh.rotation.z = Math.sin(t / 5) * 0.05;

      renderer.render(scene, camera);
    }
    animate();

    const handleResize = () => {
      if (!mount) return;
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 z-0" />;
};

export default Silk;
