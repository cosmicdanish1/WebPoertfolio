import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import HackerRoom from '../compopnent/HackerRoom'
import { Suspense } from 'react'
import CanvasLoader from '../compopnent/CanvasLoader'

import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'

import ReactLogo from '../compopnent/ReactLogo'

import JavaLogo from '../compopnent/JavaLogo'

const Hero = () => {
  
//     const x = useControls( 'HackerRoom',{
//               positionX:{
//                 value: 0,
//                 min: -10,
//                 max: 10
//               }, 
//               positionY:{
//                 value: 0,
//                 min: -10,
//                 max: 10
//               },
//                positionZ:{
//                 value: 0,
//                 min: -10,
//                 max: 10
//               },
//               rotationX:{
//                 value: 0,
//                 min: -10,
//                 max: 10
//               },
//               rotationY:{
//                 value: 0,
//                 min: -10,
//                 max: 10
//               },
//               rotationZ:{
//                 value: 0,
//                 min: -10,
//                 max: 10
//               },
//               scale:{
//                 value: 0,
//                 min: -10,
//                 max: 10
//               }
// })

const isSmall = useMediaQuery({maxWidth: 440});
const isMobile = useMediaQuery({maxWidth: 768});
const isTablet = useMediaQuery({minWidth: 768, maxWidth: 1024});

const sizes = calculateSizes(isSmall,isMobile,isTablet)

  return (
     <section className='min-h-screen w-full flex flex-col relative'>
        <div className='w-full  mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
            <p className='sm:text-3xl text-2xl font-medium text-white text-center font-family-generalsans '>
                Hii,I am Md Danish Qureshi <span className='waving-hand'>👋</span>
            </p>
            <p className='hero_tag text-gray_gradient'>Building Software and Youtube Video </p>
            <h1></h1>
        </div>

        <div className='w-full h-full absolute inset-0'>
            {/* <Leva/> */}
                <Canvas className='w-full h-full mt-20 ' >
                <Suspense fallback={<CanvasLoader/>}>
                <PerspectiveCamera makeDefault position={[0,0,20]}/>
                    <HackerRoom 
                    position={sizes.deskPosition} 
                    // scale={2.3} 
                    scale={sizes.deskScale}
                    rotation={[0,0.1,0]}
                    // position={[x.positionX,x.positionY,x.positionZ]}
                    // rotation={[x.rotationX,x.rotationY,x.rotationZ]}
                    // scale={[x.scale,x.scale,x.scale]}
                    
                    />
                    <group>

                       {/* <Target position ={sizes.targetPosition} />  */}
                       <ReactLogo/>
                       
                       <JavaLogo position={[-5,1,5]} scale={[1, 1,1]}
                        
                        />

                    </group>
                    <ambientLight intensity={2}
                    
                    
                    />
                    <directionalLight intensity={3} position={[9,1,14]}/>
                </Suspense>
              
            </Canvas>
        </div>
      
  
     </section>
  )
}

export default Hero