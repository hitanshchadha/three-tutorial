import React, { useRef } from "react";
import { Float, useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("untitled.glb");
  return ( <Float>
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Material.001"]}
        scale={[-1.511, -2.527, -2.527]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials["Material.003"]}
        position={[0, 2.131, 0]}
        scale={0.702}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[0, 3.076, 0]}
        scale={0.358}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder002.geometry}
        material={materials["Material.002"]}
        position={[-0.008, 3.334, -0.021]}
        scale={[1.012, 0.475, 1.012]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={materials["Material.005"]}
        position={[1.596, -0.045, -0.041]}
        rotation={[1.569, -0.004, 1.573]}
        scale={[1.962, 1, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={materials["Material.006"]}
        position={[1.602, -0.114, 1.682]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.512}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder003.geometry}
        material={materials["Material.007"]}
        position={[0.275, -8.678, -0.169]}
        scale={-6.032}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus.geometry}
        material={nodes.Torus.material}
        position={[-5.209, 4.744, 5.292]}
        rotation={[-2.836, 0.341, -1.018]}
        scale={1.131}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Torus001.geometry}
        material={materials["Material.009"]}
        position={[-2.155, 4.995, -5.007]}
        rotation={[0.395, 0.213, -0.001]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere.geometry}
        material={materials["Material.011"]}
        position={[-2.453, 3.877, 8.347]}
        scale={1.085}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder004.geometry}
        material={nodes.Cylinder004.material}
        position={[-2, 6.002, -0.146]}
        rotation={[-0.764, 0.836, -0.111]}
        scale={[-1.014, -0.213, -1.033]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone.geometry}
        material={materials["Material.012"]}
        position={[6.373, 5.82, 6.451]}
        rotation={[-2.252, -0.533, -0.471]}
        scale={[1, 1.54, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Sphere001.geometry}
        material={materials["Material.010"]}
        position={[3.575, 4.578, -7.516]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Icosphere.geometry}
        material={nodes.Icosphere.material}
        position={[7.308, -0.021, 5.425]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cone001.geometry}
        material={nodes.Cone001.material}
        position={[8.21, -0.651, -4.816]}
        rotation={[0.166, 0.221, 0.627]}
        scale={[1, 1.535, 1]}
      />
    </group></Float>
  );
}

useGLTF.preload("untitled.glb");









