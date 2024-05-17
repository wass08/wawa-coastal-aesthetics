import { Environment, OrbitControls } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils.js";
import { GradientScene } from "./GradientScene";

export const Experience = () => {
  return (
    <>
      <OrbitControls maxPolarAngle={degToRad(80)} />
      <Environment preset="sunset" />
      <directionalLight
        intensity={0.42}
        position={[3, 1, 3]}
        castShadow
        shadow-normalBias={0.06}
      />
      <GradientScene scale={0.3} />
      <mesh rotation-x={-Math.PI / 2} position-y={-0.5}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="skyblue" />
      </mesh>
    </>
  );
};
