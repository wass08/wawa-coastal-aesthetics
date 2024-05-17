import { Canvas } from "@react-three/fiber";
import { Experience } from "./components/Experience";

function App() {
  return (
    <Canvas shadows camera={{ position: [5, 4, 5], fov: 30 }}>
      <color attach="background" args={["#eeeeff"]} />
      <fog attach="fog" args={["#eeeeff", 20, 50]} />
      <Experience />
    </Canvas>
  );
}

export default App;
