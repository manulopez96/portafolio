import { Environment } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

function Placa({ pos = [0, 0, 0] }) {
  return (
    <mesh position={pos}>
      <boxGeometry args={[0.95, 0.95, 0.02]} />
      <meshStandardMaterial metalness={1} roughness={0} color={"white"} />
    </mesh>
  );
}

function smoothMove(start, end, alpha) {
  return start + (end - start) * alpha;
}

function ModifyCamera({ x = -1 }) {
  const { camera } = useThree();

  useFrame(() => {
    if (camera) {
      // Interpolación suave de la posición de la cámara
      const smoothedPosition = smoothMove(camera.position.x, x, 0.05); // '0.1' es la velocidad de interpolación
      camera.position.set(smoothedPosition, 0, 7);
      camera.lookAt(0, -0.3, 0);
    }
  });

  return null;
}
export default function Environmenty() {
  const placasRef = useRef();
  const [distance, setDistance] = useState(1);
  const [alto, setAlto] = useState(100);

  useEffect(() => {
    const calculateDistance = () => {
      if (placasRef.current) {
        const rect = placasRef.current.getBoundingClientRect();
        setDistance(rect.top - window.innerHeight);
        setAlto(rect.height);
      }
    };
    // Calcular la distancia al cargar la página y al hacer scroll
    calculateDistance();
    window.addEventListener("scroll", calculateDistance);
    window.addEventListener("resize", calculateDistance); // Recalcular en caso de redimensionar la ventana

    // Limpiar los event listeners al desmontar el componente
    return () => {
      window.removeEventListener("scroll", calculateDistance);
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  return (
    <Canvas
      ref={placasRef}
      style={{ width: "150vw", height: "110vh", overflow: "visible" }}
    >
      <Environment files="/hdr/NightSkyHDRI008_4K-HDR.exr" />
      {/* <OrbitControls /> */}

      <ModifyCamera x={distance / alto} />

      <group
        scale={1.1}
        position={[0.5, -1, 3]}
        rotation={[
          (Math.PI / 180) * 0,
          (Math.PI / 180) * 20,
          (Math.PI / 180) * 0,
        ]}
      >
        {/* <Placa pos={[-3, -1, 0]} /> */}
        <Placa pos={[-3, 2, 0]} />
        <Placa pos={[-3, 1, 0]} />
        <Placa pos={[-3, 0, 0]} />
        <Placa pos={[-2, 0, 0]} />
        <Placa pos={[-2, 1, 0]} />
        <Placa pos={[-2, 2, 0]} />
        <Placa pos={[-1, 2, 0]} />
        <Placa pos={[-1, 1, 0]} />
        <Placa pos={[0, 2, 0]} />
        <Placa pos={[0, 0, 0]} />
        <Placa pos={[1, 1, 0]} />
        <Placa pos={[1, 2, 0]} />
        <Placa pos={[1, 0, 0]} />
        <Placa pos={[2, 2, 0]} />
        <Placa pos={[2, 3, 0]} />
        <Placa pos={[2, -1, 0]} />
        <Placa pos={[3, 1, 0]} />
        <Placa pos={[3, 0, 0]} />
        <Placa pos={[4, 0, 0]} />
        <Placa pos={[4, -1, 0]} />
        <Placa pos={[4, 1, 0]} />
        <Placa pos={[4, 2, 0]} />
        <Placa pos={[5, -2, 0]} />
        <Placa pos={[5, -1, 0]} />
        <Placa pos={[5, 0, 0]} />
        <Placa pos={[5, 2, 0]} />
        <Placa pos={[5, 3, 0]} />
      </group>
    </Canvas>
  );
}
