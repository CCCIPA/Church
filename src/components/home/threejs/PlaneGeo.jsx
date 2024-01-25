"use client"

import * as THREE from 'three';

const PlaneBufferGeometryComponent = () => {
  const vertices = new Float32Array([-5, 0, 5, 0, 5, 10, -5, 10]);
  const positions = new THREE.BufferAttribute(vertices, 2);
  const geometry = new THREE.BufferGeometry().setAttribute('position', positions);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 }); // Example material
  const mesh = new THREE.Mesh(geometry, material);

  // Assuming you have a scene object to add the mesh to
  scene.add(mesh);

  return null; // No need to return a JSX element
};

export default PlaneBufferGeometryComponent;