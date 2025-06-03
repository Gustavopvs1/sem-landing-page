// src/components/Hero.jsx
import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-scroll';
import '../styles/components/Hero.css';

const Hero = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  
  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section className="section hero" ref={ref}>
      <motion.div 
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
      <motion.img 
        src="/sem4.png" 
        alt="Logotipo de Servicios Empresariales a la Medida (SEM)" 
        className="hero-logo"
        variants={itemVariants}
      />


        
        <motion.h1 
          variants={itemVariants}
          className="hero-title"
        >
          Servicios Empresariales a la Medida
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className="hero-cta"
        >
          <Link
            to="nosotros"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="cta-button"
          >
            Comenzar ahora
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;