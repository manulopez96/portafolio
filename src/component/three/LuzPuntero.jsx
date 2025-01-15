import React, { useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
//import { OrbitControls } from "@react-three/drei";
import { Texto } from "./Texto";

export const LuzPuntero = () => {
  const lightRef = useRef();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handlePointerMove = (event) => {
    const { clientX, clientY } = event;

    // Normalizar las coordenadas del puntero a -1 y 1
    const x = (clientX / window.innerWidth) * 16 - 8;
    const y = -(clientY / window.innerHeight) * 8 + 4;
    setMousePosition({ x, y });
  };

  return (
    <Canvas
      camera={{
        fov: 75,
        near: 0.001,
        far: 1000,
        position: [0, 0, 0.18],
      }}
      style={{ width: "150vw", height: "20vh", overflow: "" }}
      onPointerMove={handlePointerMove}
      className="luz-puntero"
    >
      <color attach="background" args={["#09051d"]} />
      {/* <fog attach="fog" args={["black", 0, 20]} /> */}

      {/* Luz ambiental */}
      {/* <ambientLight intensity={0.5} /> */}
      {/* <directionalLight position={[5, 5, 5]} /> */}

      {/* Luz que sigue al puntero */}
      <pointLight
        ref={lightRef}
        intensity={25}
        distance={10}
        decay={0.01}
        color="white"
        position={[mousePosition.x, mousePosition.y, 1]}
        // position={[-3, 3, 2]}
      />
      {/* texto */}
      <Texto wDisplay={window.innerWidth}></Texto>

      {/* Controles de órbita */}
      {/*<OrbitControls />*/}

      {/* Plano para capturar eventos */}
      <mesh position={[0, 0, -2]}>
        <planeGeometry args={[window.innerWidth, window.innerHeight * 0.3]} />
        <meshStandardMaterial transparent opacity={0.1} color={0x09051d} />
      </mesh>
    </Canvas>
  );
};
