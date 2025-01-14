import React, { useState } from "react";
import { Text3D } from "@react-three/drei";

export const Texto = ({ wDisplay }) => {
  const [escala, setEscala] = useState(wDisplay);

  if (escala | (wDisplay / 25000 + 0.02)) {
    setEscala(wDisplay / 25000 + 0.02);
  }

  console.log("Display ancho: " + wDisplay);
  console.log("Escala: " + escala);

  return (
    <>
      <Text3D
        font="/fonts/Montserrat_Regular.json"
        // font="/fonts/Rockybilly_Regular.json"
        //font="/fonts/Mouse_Memoirs_Regular.json"
        // font="/fonts/QuigleyWiggly_Regular.json"
        // font="/fonts/Scriptina-Alternates-Regular.json"
        // font="/fonts/Palamecia-Titling-Regular.json"
        // font="/fonts/Rabid_Science_Regular.json"
        // font="/fonts/ORGANICAL_PERSONAL_USE_Bold_Italic.json"
        // font="/fonts/CHITONG_TRIAL_Regular.json"
        // font="/fonts/Tolusen_Regular.json"
        // font="/fonts/BlossomDreamsRegular.json"
        // font="/fonts/REDHEKA_Regular.json"
        // font="/fonts/Taskyna_Regular.json"
        // font="/fonts/Zembrush_Regular.json"
        // font="/fonts/Bellagieta_Regular.json"
        // font="/fonts/JockerBlockRegular.json"
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
