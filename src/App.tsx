import { Canvas } from "@react-three/fiber";
import "./App.css";
import {
  ContactShadows,
  Environment,
  OrbitControls,
  useGLTF,
} from "@react-three/drei";
// import { Model } from "./Trans";
import { Model } from "./Shoe";

function App() {
  return (
    <main className="h-screen ">
      {/* <Canvas shadows camera={{ position: [0, 0, 15], fov: 50 }}>
        <Environment preset="forest" />
        <Model />
        <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
        <OrbitControls autoRotate />
      </Canvas> */}
      <Canvas shadows camera={{ position: [0, 0, 5] }}>
        <Environment preset="forest" />
        <Model />
        <ContactShadows position={[0, -0.8, 0]} color="#ffffff" />
        <OrbitControls autoRotate />
      </Canvas>
    </main>
  );
}

export default App;
