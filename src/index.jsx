import { Environment, OrbitControls, OrthographicCamera, PerspectiveCamera,  } from "@react-three/drei"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import Model from './Untitled.jsx';
import { Float } from "@react-three/drei";
import { DirectionalLight } from "three";
import { useSpring, useMotionValue } from "framer-motion";
import { useEffect } from "react";


export default  function Three() {
    const mouse = {

        x: useMotionValue(0),
    
        y: useMotionValue(0)
    
      }
    
    
    
      const smoothMouse = {
    
        x: useSpring(mouse.x, {stiffness: 75, damping: 100, mass: 3}),
    
        y: useSpring(mouse.y, {stiffness: 75, damping: 100, mass: 3})
    
      }
    
    
    
      const manageMouse = e => {
        const { innerWidth, innerHeight } = window;
        const { clientX, clientY } = e;
        const x = clientX / innerWidth
        const y = clientY / innerHeight
        mouse.x.set(x);
        mouse.y.set(y);
        
    
      }
    
    
    
      useEffect( () => {
    
        window.addEventListener("mousemove", manageMouse)
    
        return () => window.removeEventListener("mousemove", manageMouse)
    
      }, [])
   
    return (
        <>
       <PerspectiveCamera makeDefault position={[20, 0, -8]} />
        <OrbitControls maxDistance={20} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2.5}/>
       <Model mouse={smoothMouse}></Model>   
        <Environment preset="sunset"/>
       <ambientLight intensity={2}/>
     </>
    )
}