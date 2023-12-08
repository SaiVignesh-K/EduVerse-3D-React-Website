import { Canvas } from "@react-three/fiber"
import { Loader, PointerLockControls, KeyboardControls, Text, Sparkles, Html, Stars } from "@react-three/drei"
import { Debug, Physics, RigidBody } from "@react-three/rapier"
import { Player } from "./Player"
import { Suspense } from "react"
import { DigestiveRoom } from "./DigestiveRoom"
import { SolarSystem } from "./Solarsytem"
import { CorridorAstronomy } from "./CorridorAstronomy"
import { CorridorBiology } from "./CorridorBiology"
import { CorridorChemistry } from "./CorridorChemistry"
import { ChemLabFinal } from "./ChemLabFinal"
import { Campus } from "./Campus"
import { Login } from './Login';
import { Signup } from './Signup';


import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes, BrowserRouter } from 'react-router-dom';

export default function App() {
  const queryParams = new URLSearchParams(window.location.search)
  const gravity = queryParams.get("gravity") || -9.8
  const flycontrol = queryParams.get("flycontrol") || false
  var zdef = 0;
  if (window.location.pathname == "/") {
    zdef = 25
  }
  const x = queryParams.get("x") || 0
  const y = queryParams.get("y") || 0
  const z = queryParams.get("z") || zdef
  console.log(gravity)
  console.log(flycontrol)

  return (<>
    {/* */}

    <KeyboardControls
      map={[
        { name: "forward", keys: ["ArrowUp", "w", "W"] },
        { name: "backward", keys: ["ArrowDown", "s", "S"] },
        { name: "left", keys: ["ArrowLeft", "a", "A"] },
        { name: "right", keys: ["ArrowRight", "d", "D"] },
        { name: "jump", keys: ["Space"] },
      ]}>

      <Suspense>
        <Canvas camera={{ fov: 45 }}>
          <directionalLight position={[10, 10, 5]} intensity={0.5} />
          {/* <School/> */}
          <Physics gravity={[0, gravity, 0]}>

            <Routes>
              <Route path="/SolarSystem" element={<SolarSystem />} />
              <Route path="/Digestive" element={<DigestiveRoom />} />
              <Route path="/CorridorAstronomy" element={<CorridorAstronomy />} />
              <Route path="/CorridorBiology" element={<CorridorBiology />} />
              <Route path="/CorridorChemistry" element={<CorridorChemistry />} />
              <Route path="/ChemLabFinal" element={<ChemLabFinal />} />
              <Route path="/" element={<Campus />} />

              {/* <Route path="/" element={<Signup/>} />
          <Route path="/Login" element={<Login/>} /> */}

              {/* <Route path="/Finalcampusmap" element={<Finalcampusmap/>} /> */}

            </Routes>

            <Player flycontrol={flycontrol} x={x} y={y} z={z} />
            {/* <Debug /> */}



          </Physics>
          <PointerLockControls />
          <ambientLight intensity={0.5} />
        </Canvas>

      </Suspense>
      <Loader />
    </KeyboardControls>


  </>
  )
}
