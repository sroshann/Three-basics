import { Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

function rotatingCube() {

    const meshRef = useRef()
    useFrame( () => {

        if( meshRef.current ) {

            meshRef.current.rotation.x += 0.01
            meshRef.current.rotation.y += 0.01

        }

    } )

    return (

        <mesh ref={ meshRef }>
            
            <cylinderGeometry args={[ 1, 1, 1 ]}/>
            <meshLambertMaterial color="red" emissive="red" />
            <Sparkles count={ 300 } scale={1} size={6} speed={0.001} noise={0.2} color="orange" />

        </mesh>

    )

}

export default rotatingCube