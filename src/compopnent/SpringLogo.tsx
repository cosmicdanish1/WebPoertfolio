import * as THREE from 'three'
import { Float, useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    Plane: THREE.Mesh
  }
  materials: {}
}

const SpringLogo = (props: JSX.IntrinsicElements['group']) =>{
  const { nodes } = useGLTF('/models/spring.glb') as GLTFResult

  const metallicMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    metalness: 1,                      // Full metalness for maximum shine
    roughness: 0.2,                     // Very low roughness for a shiny effect
    emissive: new THREE.Color('#EBDDC3'), // Subtle emissive glow
    emissiveIntensity: 0.3,
    envMapIntensity: 1.2,                 // Enhancing environmental reflections
  });
  return (
    <Float floatIntensity={4}>

    
    <group {...props} dispose={null}>
      <mesh
        geometry={(nodes.Plane as any).geometry}
        material={metallicMaterial} // Apply the gradient material
        scale={1.5}
        rotation={[Math.PI / 2, 0, 0]}
        position={[-7,1,6]}
      />
    </group>
    </Float>
  )
}

useGLTF.preload('/models/spring.glb')

export default SpringLogo;