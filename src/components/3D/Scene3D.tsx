import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import FloatingIcon from './FloatingIcon';

interface Scene3DProps {
  className?: string;
}

const Scene3D = ({ className }: Scene3DProps) => {
  const icons = [
    { position: [-2, 0, 0] as [number, number, number], text: "React", color: "#00d4ff" },
    { position: [0, 0, 0] as [number, number, number], text: "TypeScript", color: "#00ff88" },
    { position: [2, 0, 0] as [number, number, number], text: "Three.js", color: "#aa88ff" },
  ];

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 0, 6]} />
          
          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00d4ff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#aa88ff" />
          
          {/* Icons */}
          {icons.map((icon, index) => (
            <FloatingIcon
              key={index}
              position={icon.position}
              text={icon.text}
              color={icon.color}
              onClick={() => console.log(`Clicked ${icon.text}`)}
            />
          ))}
          
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene3D;