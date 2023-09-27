import React, { useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Box,
  Environment,
  OrbitControls,
  Lightformer,
  Stage,
  Center,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import Headphones from "./Headphones";
import sky from "./assets/sunset.hdr";

const Scene = () => {
  return (
    <>
      <Center rotation={[0, -0.8, 0]}>
        <Headphones />
      </Center>
    </>
  );
};

const App = () => {
  return (
    <Canvas shadows camera={{ fov: 70, position: [0, 0, 4] }}>
      <color attach="background" args={["#f0f0f0"]} />
      <OrbitControls />
      <Scene />
      <Environment files={sky} resolution={256} blur={0.8}>
        <Lightformer
          intensity={4}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
        />
        <group rotation={[Math.PI / 2, 1, 0]}>
          <Lightformer
            intensity={0.5}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
          />

          <Lightformer
            intensity={0.5}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[50, 2, 1]}
          />
        </group>
        <group>
          <Lightformer
            intensity={5}
            form="ring"
            color="#35d1fc"
            rotation-y={Math.PI / 2}
            position={[-5, 2, -1]}
            scale={[10, 10, 1]}
          />
        </group>
      </Environment>
    </Canvas>
  );
};

export default App;
