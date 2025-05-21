import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaPlus, FaAngleRight } from 'react-icons/fa';
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
          La Mala Calidad de Potencia es como.....
        </motion.h2>

        <div className="power-quality-grid">
          {/* Izquierda */}
          <motion.div 
            className="power-quality-left"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
          >
            {/* Fuente */}
            <div className="power-supply-element horizontal-pair">
              <img src="/manos.jpg" alt="Manos con agua limpia" className="oval-image" />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src="/cfe.png" alt="Logo CFE" style={{ maxWidth: '120px' }} />
                <div className="power-element-title">Fuente</div>
              </div>
            </div>

            <FaPlus className="plus-sign" />

            {/* Disturbio */}
            <div className="power-supply-element horizontal-pair">
              <img src="/agua.png" alt="Agua contaminada" className="oval-image" />
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <img src="/disturbio.png" alt="Disturbio" style={{ maxWidth: '100px' }} />
                <div className="power-element-title">Disturbio</div>
              </div>
            </div>
          </motion.div>

          {/* Flecha */}
          <motion.div 
            className="power-quality-arrow"
            initial={{ opacity: 1, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 1, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <FaAngleRight size={60} color="#ccc" />
          </motion.div>

          {/* Derecha */}
          <motion.div 
            className="power-quality-right"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="result-container">
              <img src="/fab.png" alt="Fábrica" className="factory-icon" />
              <img src="/warning.png" alt="Advertencia" className="warning-icon" />
            </div>

            <div className="drink-water-container">
              <img src="/vaso.png" alt="Persona tomando agua contaminada" className="rounded-image" />
              <h3 className="drink-water-text">Tomar agua contaminada...</h3>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PowerQuality;
