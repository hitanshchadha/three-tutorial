import { useState } from 'react'

import './App.css'
import { Canvas } from '@react-three/fiber'
import Three from './index.jsx'
import { PositionPoint } from '@react-three/drei'


function App() {
 
  return (
    <>
    <Canvas id="canvas">
     <Three/>
    </Canvas>
    </>
  )
}

export default App
