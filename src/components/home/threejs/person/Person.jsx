import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import Interface from "./Interface";

export default function Person() {
  return (
    <main className="h-[100dvh] m-auto">     
      <Canvas camera={{ position: [1, 1.5, 2.5], fov: 80 }} dpr={[1,2]} shadows>
        <Experience />
      </Canvas>
        {/* <Interface />       */}
    </main>
  );
}
