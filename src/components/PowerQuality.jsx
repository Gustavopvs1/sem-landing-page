import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import '../styles/components/Nosotros.css';

const PowerQuality = () => {
  const controls = useRef(null);
  const isInView = useInView(controls, { amount: 0.3 });

  return (
    <section className="power-quality-section" ref={controls}>
      <div className="power-quality-container">
        <motion.h2 
          className="power-quality-title"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          La Mala Calidad de Potencia es como...
        </motion.h2>

        <div className="power-quality-grid">
          {/* Izquierda */}
          <motion.div 
            className="power-quality-left"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            <div className="image-block">
              <img src="/manos.jpg" alt="Manos con agua limpia" className="oval-image" />
              <div className="power-label">Fuente</div>
            </div>

            <div className="image-block">
              <img src="/agua.png" alt="Agua contaminada" className="oval-image" />
              <div className="power-label">Disturbio</div>
            </div>
          </motion.div>

          {/* Flecha */}
          <motion.div 
            className="power-quality-arrow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
{/*             <svg viewBox="0 0 50 150" className="arrow-svg">
              <path d="M 25,0 L 50,75 L 35,75 L 35,150 L 15,150 L 15,75 L 0,75 Z" fill="#ccc" stroke="#999" />
            </svg> */}
          </motion.div>

          {/* Derecha */}
          <motion.div 
            className="power-quality-right"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="image-block">
              <img src="/vaso.png" alt="Persona tomando agua contaminada" className="rounded-image" />
            </div>
            <h3 className="drink-water-text">Tomar agua contaminada</h3>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PowerQuality;
