// Componente ElectricalSystem.jsx
import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import '../styles/components/Nosotros.css';

const CausaItem = ({ text }) => {
  return (
    <div className="causa-item">
      <span className="causa-plus">+</span>
      <span className="causa-texto">{text}</span>
    </div>
  );
};

const EfectoItem = ({ text }) => {
  return (
    <div className="efecto-item">
      <span className="efecto-plus">+</span>
      <span className="efecto-texto">{text}</span>
    </div>
  );
};

const OpexChart = () => {
  const barHeights = [20, 40, 60, 80, 100];
  
  return (
    <div className="opex-chart">
      <div className="opex-definition">
        OPEX (Gastos Operacionales): Costos continuos para mantener el funcionamiento del negocio
      </div>
      <div className="bars-container">
        {barHeights.map((height, index) => (
          <div 
            key={index} 
            className="opex-bar" 
            style={{ 
              height: `${height}px`,
              backgroundColor: `rgba(220, ${100 - height/2}, ${100 - height/2}, ${0.6 + (index * 0.1)})` 
            }}
          />
        ))}
      </div>
      <div className="opex-text">OPEX</div>
    </div>
  );
};

const ElectricalSystem = () => {
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

  const causasInternas = [
    "Mantenimiento inadecuado",
    "Selección equipos inadecuada",
    "Malas prácticas",
    "Cargas no-lineales",
    "Cambios en las cargas"
  ];

  const causasExternas = [
    "Contaminación vecinal",
    "Maniobras de CFE",
    "Descargas atmosféricas"
  ];

  const efectos = [
    "Paros de producción",
    "Daño en tarjetas electrónicas",
    "Riesgos de incendio",
    "Riesgo de electrocución",
    "Envejecimiento prematuro de la instalación eléctrica",
    "Multas por Incumplimiento Normativo"
  ];

  return (
    <section className="section electrical-system" ref={ref}>
      <motion.div 
        className="electrical-container"
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.6 }
          }
        }}
        initial="hidden"
        animate={controls}
      >
        <h2 className="electrical-title">
          La instalación eléctrica en su conjunto se asemeja a un sistema vivo que es sensible a causas internas y externas:
        </h2>
        
        <div className="electrical-content">
          <div className="electrical-section causas-section">
            <h3 className="section-subtitle">Causas</h3>
            
            <div className="causas-container">
              <h4 className="causas-subtitle">Internas</h4>
              <div className="causas-list">
                {causasInternas.map((causa, index) => (
                  <CausaItem key={index} text={causa} />
                ))}
              </div>
              
              <h4 className="causas-subtitle">Externas</h4>
              <div className="causas-list">
                {causasExternas.map((causa, index) => (
                  <CausaItem key={index} text={causa} />
                ))}
              </div>
            </div>
          </div>
          
          <div className="electrical-section efectos-section">
            <h3 className="section-subtitle">Efectos</h3>
            <div className="efectos-container">
              {efectos.map((efecto, index) => (
                <EfectoItem key={index} text={efecto} />
              ))}
            </div>
          </div>
          
          <div className="electrical-section consecuencias-section">
            <h3 className="section-subtitle">Consecuencias</h3>
            <div className="consecuencias-container">
              <OpexChart />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ElectricalSystem;