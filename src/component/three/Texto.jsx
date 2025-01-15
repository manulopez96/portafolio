import React, { useState } from "react";
import { Text3D } from "@react-three/drei";

export const Texto = ({ wDisplay }) => {
  const [escala, setEscala] = useState(wDisplay);

  if (escala | (wDisplay / 25000 + 0.02)) {
    setEscala(wDisplay / 25000 + 0.02);
  }

  
  return (
    <>
      <Text3D
        font="/fonts/Montserrat_Regular.json"
      
        scale={escala}
        size={1}
        height={0.02}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.03}
        bevelSize={0.02}
        bevelSegments={5}
        //position={[-0.3, -0.025, 0.03]}
        position={[-(escala * 8), -0.025, 0.03]}
        castShadow
      >
        Desarrollador Fullstack
        <meshStandardMaterial color={0x4f1b1b} />
      </Text3D>
    </>
  );
};
