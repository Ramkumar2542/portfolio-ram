import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Box, Sphere } from '@react-three/drei';
import * as THREE from 'three';

interface FloatingIconProps {
  position: [number, number, number];
  text: string;
  color?: string;
  onClick?: () => void;
}

const FloatingIcon = ({ position, text, color = "#00d4ff", onClick }: FloatingIconProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      
      // Gentle rotation
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      
      // Hover scaling
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
    onClick?.();
  };

  return (
    <group position={position}>
      <Box
        ref={meshRef}
        args={[0.8, 0.8, 0.8]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={handleClick}
      >
        <meshStandardMaterial
          color={hovered ? "#00ff88" : color}
          emissive={hovered ? color : "#000000"}
          emissiveIntensity={hovered ? 0.3 : 0.1}
          transparent
          opacity={0.8}
        />
      </Box>
      
      <Text
        position={[0, -0.6, 0]}
        fontSize={0.2}
        color={color}
        anchorX="center"
        anchorY="middle"
        font="/fonts/inter.woff"
      >
        {text}
      </Text>
      
      {/* Glow effect */}
      <Sphere args={[0.5]} position={[0, 0, 0]}>
        <meshBasicMaterial
          color={color}
          transparent
          opacity={hovered ? 0.1 : 0.05}
        />
      </Sphere>
    </group>
  );
};

export default FloatingIcon;