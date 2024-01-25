import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Interface from "./Interface";

export default function Person() {
  return (
    <div className="h-[100dvh]">
      <Canvas camera={{position: [1,1.5, 2.5], fov:50}} shadows>
        <Experience />
      </Canvas>
      <Interface/>
    </div>
  );
}
