import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * A genuine WebGL 3D scene (Three.js) — real perspective camera, PBR materials
 * (metalness/roughness), multi-light setup, and true depth/shading. Renders a
 * small floating chain of blockchain "blocks" that slowly rotates and reacts
 * to the cursor with a subtle parallax tilt.
 */
export default function Block3DScene({ height = 320 }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const prefersReduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const width = mount.clientWidth;
    const heightPx = height;

    // --- Scene / camera / renderer ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / heightPx, 0.1, 100);
    camera.position.set(0, 0.6, 7.2);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, heightPx);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    mount.appendChild(renderer.domElement);

    // --- Lighting: ambient fill + key light + two colored accent lights ---
    scene.add(new THREE.AmbientLight(0x223047, 1.1));

    const keyLight = new THREE.DirectionalLight(0xffffff, 1.6);
    keyLight.position.set(4, 5, 6);
    scene.add(keyLight);

    const limeLight = new THREE.PointLight(0xc8f169, 6, 14, 2);
    limeLight.position.set(-3, 1.5, 3);
    scene.add(limeLight);

    const violetLight = new THREE.PointLight(0x9b87f5, 6, 14, 2);
    violetLight.position.set(3, -1.5, 2.5);
    scene.add(violetLight);

    // --- Blocks: a small floating chain, PBR materials ---
    const group = new THREE.Group();
    const blockMat = new THREE.MeshPhysicalMaterial({
      color: 0x141a26,
      metalness: 0.75,
      roughness: 0.28,
      clearcoat: 0.5,
      clearcoatRoughness: 0.3,
    });

    const positions = [
      [-1.5, 0.55, 0.2],
      [0, -0.15, 0.5],
      [1.55, 0.4, -0.1],
    ];
    const edgeColors = [0xc8f169, 0x9b87f5, 0xc8f169];

    positions.forEach(([x, y, z], i) => {
      const size = 1.15 - i * 0.08;
      const geo = new THREE.BoxGeometry(size, size, size);
      const mesh = new THREE.Mesh(geo, blockMat);
      mesh.position.set(x, y, z);
      mesh.rotation.set(0.3 + i * 0.15, 0.5 - i * 0.2, 0.05);
      group.add(mesh);

      const edges = new THREE.EdgesGeometry(geo);
      const line = new THREE.LineSegments(
        edges,
        new THREE.LineBasicMaterial({ color: edgeColors[i], transparent: true, opacity: 0.85 })
      );
      line.position.copy(mesh.position);
      line.rotation.copy(mesh.rotation);
      group.add(line);
    });

    // Thin connecting "chain link" cylinders between blocks
    for (let i = 0; i < positions.length - 1; i++) {
      const a = new THREE.Vector3(...positions[i]);
      const b = new THREE.Vector3(...positions[i + 1]);
      const mid = a.clone().add(b).multiplyScalar(0.5);
      const dist = a.distanceTo(b);
      const cylGeo = new THREE.CylinderGeometry(0.02, 0.02, dist, 8);
      const cylMat = new THREE.MeshBasicMaterial({ color: 0x8d95a8, transparent: true, opacity: 0.35 });
      const cyl = new THREE.Mesh(cylGeo, cylMat);
      cyl.position.copy(mid);
      cyl.lookAt(b);
      cyl.rotateX(Math.PI / 2);
      group.add(cyl);
    }

    scene.add(group);
    group.rotation.y = -0.3;

    // --- Mouse parallax ---
    let targetX = 0;
    let targetY = 0;
    const handlePointerMove = (e) => {
      const rect = mount.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.3;
    };
    window.addEventListener("mousemove", handlePointerMove);

    // --- Resize handling ---
    const handleResize = () => {
      const w = mount.clientWidth;
      camera.aspect = w / heightPx;
      camera.updateProjectionMatrix();
      renderer.setSize(w, heightPx);
    };
    window.addEventListener("resize", handleResize);

    // --- Animation loop ---
    let frameId;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      if (!prefersReduced) {
        group.rotation.y += 0.0035;
        group.position.y = Math.sin(t * 0.6) * 0.08;
      }
      group.rotation.x += (targetY - group.rotation.x) * 0.04;
      camera.position.x += (targetX * 2 - camera.position.x) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handlePointerMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
      blockMat.dispose();
      group.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material && obj.material.dispose) obj.material.dispose();
      });
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, [height]);

  return <div ref={mountRef} style={{ width: "100%", height }} aria-hidden="true" />;
}
