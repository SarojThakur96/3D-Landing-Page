import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
// import { Model } from "./Shoe";
import { Model } from "./Electrical_transformer.tsx";

function App() {
  return (
    <main className="h-screen ">
      <Canvas shadows camera={{ position: [0, 0, 8] }}>
        <Environment preset="forest" />
        <Model />
        <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
        <OrbitControls autoRotate />
      </Canvas>
    </main>
  );
}

export default App;
