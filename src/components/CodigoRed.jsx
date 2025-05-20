import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CodigoRed = () => {
  const codigoRedRef = useRef(null);
  const isInView = useInView(codigoRedRef, { amount: 0.3 });
  
  return (
    <motion.section 
      className="section codigo-red-section"
      ref={codigoRedRef}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6 }
        }
      }}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="about-container">
        <h2 className="red-title">Código de Red 2.0</h2>
        
        <div className="codigo-red-content">
          <div className="codigo-red-info">
            <div className="codigo-red-block">
              <h3 className="codigo-red-question">¿Qué es el código de Red 2.0?</h3>
              <p className="codigo-red-text">
                El Código de Red es la normativa que establece los requerimientos técnicos mínimos para el
                desarrollo eficiente de los procesos de planeación, control operativo y físico, acceso y uso de la
                infraestructura eléctrica; este documento aplica para centrales eléctricas y centros de carga
                (usuarios) de media/alta tensión.
              </p>
              <p className="codigo-red-text">
                La segunda versión de esta normativa se denominó <strong>Código de Red 2.0</strong> y fue publicado por la
                Comisión reguladora de energía <strong>(CRE)</strong> en el Diario Oficial de la Federación <strong>(DOF)</strong> el <strong>31 de
                diciembre del 2021</strong>.
              </p>
            </div>
            
            <div className="codigo-red-block">
              <h3 className="codigo-red-question">¿Cuál es el propósito del código de Red 2.0?</h3>
              <p className="codigo-red-text">
                Se busca el cabal cumplimiento con los criterios de eficiencia, calidad, confiabilidad, continuidad,
                seguridad y sustentabilidad del Sistema Eléctrico Nacional <strong>(SEN)</strong>.
              </p>
              <p className="codigo-red-text">
                Debemos ser conscientes que mantener al <strong>SEN</strong> sano y robusto es un tema de seguridad nacional
                y es responsabilidad de todos los que lo conforman.
              </p>
            </div>
            
            <div className="codigo-red-block">
              <h3 className="codigo-red-question">¿Qué ocurre si no se cumple con esta normativa?</h3>
              <p className="codigo-red-text">
                La recientemente creada Comisión Nacional de Energía <strong>(CNE)</strong> se encargará de verificar el
                cumplimiento del Código de Red 2.0 <strong>(CR)</strong>. A diferencia de otros años en los que no se hacían las
                auditorías correspondientes, a partir del mes de enero 2025 las <strong>Unidades de Inspección de
                Código de Red para Centros de Carga (UICRC)</strong> ya están siendo autorizadas.
              </p>
              <p className="codigo-red-text">
                Las multas por incumplimiento serán cuantiosas, e iniciarán en por lo menos <strong>10 millones de pesos</strong>.
              </p>
            </div>
          </div>
        </div>
        
        {/* Sección de sanciones mejorada con diseño responsivo */}
        <div className="codigo-red-sanciones-container">
          <div className="codigo-red-sanciones-wrapper">
            <div className="sanciones-title">SANCIONES POR INCUMPLIMIENTO</div>
            
            <div className="sanciones-grid">
              {/* Fracción I con su descripción */}
              <div className="sancion-item">
                <div className="sancion-circle">
                  <div className="sancion-circle-content">
                    <div>Fracción I,</div>
                    <div>inciso (k)</div>
                  </div>
                </div>
                <div className="sancion-description">
                  <div className="sancion-description-title">
                    Con multa del 2 al 10% de los ingresos brutos percibidos el año anterior
                  </div>
                  <div className="sancion-description-text">
                    Por incumplimiento grave a disposiciones de Calidad, Confiabilidad, Continuidad y Seguridad del SEN
                  </div>
                </div>
              </div>
              
              {/* Fracción II con su descripción */}
              <div className="sancion-item">
                <div className="sancion-circle">
                  <div className="sancion-circle-content">
                    <div>Fracción II,</div>
                    <div>inciso(c)</div>
                  </div>
                </div>
                <div className="sancion-description">
                  <div className="sancion-description-title">
                    Con multa de 50,000 a 200,000 salarios mínimos por incumplimiento
                  </div>
                  <div className="sancion-description-text">
                    A disposiciones en materia de Calidad, Confiabilidad, Continuidad y Seguridad del Sistema Eléctrico Nacional
                  </div>
                </div>
              </div>
            </div>
            
            {/* Advertencia - Centrada y mejorada */}
            <div className="sanciones-warning">
              <div className="warning-title">¡IMPORTANTE!</div>
              <div className="warning-text">
                Las auditorías comenzaron en enero 2025 por las UICRC
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default CodigoRed;