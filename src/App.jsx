import React from "react";
import { Canvas } from "@react-three/fiber";
import {
  Box,
  Environment,
  OrbitControls,
  Lightformer,
  Center,
} from "@react-three/drei";
import Headphones from "./Headphones";

const App = (props) => {
  return (
    <Canvas shadows camera={{ fov: 70, position: [0, 0, 5] }}>
      <OrbitControls />
      <Center rotation={[0, -0.8, 0]}>
        <Headphones {...props} />
      </Center>
      <Environment files={props.env} resolution={256} blur={0.8}>
        <Lightformer
          intensity={4}
          rotation-x={Math.PI / 2}
          position={[0, 5, -9]}
          scale={[10, 10, 1]}
          color="#309fdb"
        />
        <group rotation={[Math.PI / 2, 1, 0]}>
          <Lightformer
            intensity={0.5}
            rotation-y={Math.PI / 2}
            position={[-5, 1, -1]}
            scale={[50, 2, 1]}
            color="#309fdb"
          />

          <Lightformer
            intensity={0.5}
            rotation-y={-Math.PI / 2}
            position={[10, 1, 0]}
            scale={[50, 2, 1]}
            color="#309fdb"
          />
        </group>
        <group>
          <Lightformer
            intensity={5}
            form="ring"
            color="#309fdb"
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
