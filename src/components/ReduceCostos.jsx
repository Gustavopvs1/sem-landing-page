import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import '../styles/components/ReduceCostos.css';

const ReduceCostos = () => {
  // Referencias y controles para las animaciones
  const opexRef = useRef(null);
  const opexInView = useInView(opexRef, { amount: 0.3 });
  const opexControls = useAnimation();

  const riesgosRef = useRef(null);
  const riesgosInView = useInView(riesgosRef, { amount: 0.3 });
  const riesgosControls = useAnimation();

  // Efecto para controlar la animación de entrada de la sección OPEX
  React.useEffect(() => {
    if (opexInView) {
      opexControls.start('visible');
    } else {
      opexControls.start('hidden');
    }
  }, [opexInView, opexControls]);

  // Efecto para controlar la animación de entrada de la sección Riesgos
  React.useEffect(() => {
    if (riesgosInView) {
      riesgosControls.start('visible');
    } else {
      riesgosControls.start('hidden');
    }
  }, [riesgosInView, riesgosControls]);

  return (
    <>
      {/* Sección 1: Deja de administrar síntomas y reduce los costos de operación (OPEX) */}
      <motion.section 
        className="reduce-costos-section"
        ref={opexRef}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
        initial="hidden"
        animate={opexControls}
      >
        <div className="reduce-costos-container">
          <h2 className="reduce-costos-title">
            Deja de administrar síntomas y reduce<br />
            los costos de operación <span className="text-red">(OPEX)</span>
          </h2>
        </div>
      </motion.section>

      {/* Sección 2: Reduce los riesgos y elimina gastos innecesarios */}
      <motion.section 
        className="reduce-riesgos-section"
        ref={riesgosRef}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
        initial="hidden"
        animate={riesgosControls}
      >
        <div className="reduce-riesgos-container">
          <h2 className="reduce-riesgos-title">
            Reduce los riesgos y elimina gastos<br />
            innecesarios...
          </h2>
          
          <div className="reduce-riesgos-content">
            <div className="reduce-riesgos-imagen">
              <img src="/riesgo.png" alt="Medidor de riesgo" className="riesgo-imagen" />
            </div>
            
            <div className="reduce-riesgos-lista">
              <div className="lista-item">
                <div className="check-icon">✓</div>
                <p>Revisa periódicamente la salud de tu sistema eléctrico.</p>
              </div>
              
              <div className="lista-item">
                <div className="check-icon">✓</div>
                <p>Cumple con tus obligaciones normativas <span className="text-red">(Código de Red 2.0)</span></p>
              </div>
              
              <div className="lista-item">
                <div className="check-icon">✓</div>
                <p>Apégate a lo que dicta la norma de instalaciones eléctricas NOM-001-SEDE-2012</p>
              </div>
              
              <div className="lista-item">
                <div className="check-icon">✓</div>
                <p>Alarga la vida de tu maquinaria protegiéndola con productos de última generación.</p>
              </div>
              
              <div className="lista-item">
                <div className="check-icon">✓</div>
                <p>Capacita tus colaboradores.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default ReduceCostos;