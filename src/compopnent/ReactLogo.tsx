import { Float, useGLTF } from '@react-three/drei'
import * as THREE from 'three'

const ReactLogo = (props: any) => {
  const { nodes } = useGLTF('/models/react.glb') as any

  // Create a gradient metallic material
  const gradientMaterial = new THREE.MeshStandardMaterial({
    color: new THREE.Color('#123234'), // Base muted teal color
    metalness: 0.9,                    // High metalness for reflectivity
    roughness: 0.3,                     // Moderate roughness for realism
    emissive: new THREE.Color('#1E4A4C'), // Subtle emissive deep blue-green effect
    emissiveIntensity: 0.2,
  });

  return (
    <Float floatIntensity={2}>
      <group position={[6, 4, 2]} scale={0.01} {...props}>
        <mesh
          geometry={(nodes['React-Logo_Material002_0'] as any).geometry}
          material={gradientMaterial} // Apply the gradient material
          position={[2, -270, 18.102]}
          rotation={[0, 0, -Math.PI / 2]}
          scale={[39.166, 39.166, 52.734]}
        />
      </group>
    </Float>
  )
}

useGLTF.preload('/models/react.glb')

export default ReactLogo;
