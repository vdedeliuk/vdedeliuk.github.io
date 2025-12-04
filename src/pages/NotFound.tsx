import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';

// --- Компонент Півсфери ---
const FaintDome = () => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      // Дуже повільне обертання
      meshRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    // Опускаємо позицію [x, y, z] вниз (y = -1.5), щоб це виглядало як горизонт
    <points ref={meshRef} position={[0, -1.5, 0]} rotation={[0, 0, 0]}>
      {/* 
         sphereGeometry args:
         [radius, widthSegments, heightSegments, phiStart, phiLength, thetaStart, thetaLength]
         
         Останній аргумент (Math.PI / 2) обрізає сферу рівно наполовину (робить купол).
      */}
      <sphereGeometry args={[2.5, 96, 48, 0, Math.PI * 2, 0, Math.PI / 2]} />
      
      <pointsMaterial 
        color="#888888"     // Сірий колір замість білого (менш яскравий)
        size={0.015}        // Дуже дрібні точки
        sizeAttenuation={true} 
        transparent={true}
        opacity={0.15}      // Ледь помітна (15% видимості)
      />
    </points>
  );
};

// --- Сторінка 404 ---
const NotFoundPage = () => {
  return (
    <div style={styles.container}>
      
      <div style={styles.canvasContainer}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <FaintDome />
          {/* Вимикаємо зум, щоб не зіпсувати ефект горизонту */}
          <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.2} />
        </Canvas>
      </div>

      {/* Текстовий контент */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.contentOverlay}
      >
        <p style={styles.subHeader}>SYSTEM MALFUNCTION</p>
        
        <h1 style={styles.title}>
          <span style={styles.solidText}>404</span>
          <span style={styles.outlineText}>LOST SIGNAL</span>
        </h1>

        <a href="/" style={styles.button}>REBOOT SYSTEM</a>
      </motion.div>
    </div>
  );
};

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: '100vh',
    backgroundColor: '#050505',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: "'Inter', sans-serif",
  },
  canvasContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  contentOverlay: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
  },
  subHeader: {
    color: '#666',
    letterSpacing: '5px',
    fontSize: '12px',
    marginBottom: '20px',
    fontWeight: '600',
  },
  title: {
    fontSize: 'clamp(50px, 8vw, 120px)',
    lineHeight: '1',
    margin: '0 0 40px 0',
    fontWeight: '900',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '10px',
  },
  solidText: {
    color: '#fff',
  },
  outlineText: {
    color: 'transparent',
    WebkitTextStroke: '1px rgba(255, 255, 255, 0.5)', // Тонший і прозоріший контур
  },
  button: {
    padding: '12px 30px',
    border: '1px solid rgba(255,255,255,0.3)',
    color: '#fff',
    textDecoration: 'none',
    fontSize: '12px',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    transition: 'all 0.3s ease',
    background: 'transparent',
  }
};

export default NotFoundPage;