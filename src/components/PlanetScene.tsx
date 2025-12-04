import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { Points } from 'three';

// 1. Компонент планети з частинками
const ParticlePlanet = () => {
  const planetRef = useRef<Points>(null);

  useFrame((state, delta) => {
    // Зменшили швидкість на половину (було 0.2, стало 0.1)
    if (planetRef.current) {
      planetRef.current.rotation.y += delta * 0.1;
    }
  });

  return (
    // <points> рендерить геометрію як окремі точки, а не як полігони
    <points ref={planetRef} scale={2.5}>
      {/* 
        Збільшили кількість сегментів (128, 128), 
        щоб точок було багато і сфера виглядала густою 
      */}
      <sphereGeometry args={[1, 128, 128]} />
      
      {/* Налаштування вигляду точок */}
      <pointsMaterial 
        color="white"       // Колір точок
        size={0.02}         // Розмір кожної точки
        sizeAttenuation     // Точки стають меншими, якщо вони далі від камери (ефект глибини)
        transparent={true}
        opacity={0.8}
      />
    </points>
  );
};

// 2. Головна сцена
interface PlanetSceneProps {
  className?: string;
  style?: React.CSSProperties;
}

const PlanetScene = ({ className = '', style }: PlanetSceneProps) => {
  return (
    <div 
      className={className}
      style={{ 
        width: '100%', 
        height: '100%', 
        background: 'transparent',
        ...style 
      }}
    >
      <Canvas camera={{ position: [0, 0, 5.5] }}>
        {/* Зірки на фоні (готовий компонент з drei) */}
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        
        {/* Планета з частинками */}
        <ParticlePlanet />
        
        {/* Дозволяє користувачу крутити камеру мишкою */}
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          rotateSpeed={0.4} 
        />
      </Canvas>
    </div>
  );
};

export default PlanetScene;

