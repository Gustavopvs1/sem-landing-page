// src/components/Features.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import '../styles/components/Features.css';

// Componente de característica individual
const FeatureCard = ({ title, description, icon, index, parentInView, isExpandable = false, cardType = null }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  
  React.useEffect(() => {
    if (isInView && parentInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView, parentInView]);
  
  const handleCardClick = () => {
    if (isExpandable) {
      setIsExpanded(true);
    }
  };

  const handleCloseClick = (e) => {
    e.stopPropagation();
    setIsExpanded(false);
  };
  
  // Contenido para diferentes tipos de tarjetas expandidas
  const renderExpandedContent = () => {
    if (cardType === "estudios") {
      return (
        <div className="expanded-content">
          <div className="expanded-main">
            <div className="expanded-text">
              <div className="expanded-item">
                <h3>Calidad de la potencia</h3>
                <p>Análisis detallados de la calidad de energía para optimizar sus sistemas eléctricos.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Cortocircuito</h3>
                <p>Estudios de cortocircuito para evaluar la capacidad de sus sistemas.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Coordinación de protecciones</h3>
                <p>Garantizamos la correcta coordinación de los dispositivos de protección.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Flujo de potencia</h3>
                <p>Optimización del flujo de potencia para mejorar la eficiencia energética.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Sistema de tierras</h3>
                <p>Diseño y análisis de sistemas de puesta a tierra seguros y eficientes.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Arc Flash</h3>
                <p>Estudios de Arc Flash para garantizar la seguridad del personal.</p>
              </div>
            </div>
            
            <div className="expanded-image-container">
              <img 
                src="/monitores.png" 
                alt="Estudios especializados" 
                className="expanded-image"
              />
            </div>
          </div>
        </div>
      );
    } 
    else if (cardType === "codigo") {
      return (
        <div className="expanded-content">
          <div className="expanded-main">
            <div className="expanded-text">
              <div className="expanded-item">
                <h3>Consultoría</h3>
                <p></p>
              </div>
              
              <div className="expanded-item">
                <h3>Dictamen de obligaciones</h3>
                <p></p>
              </div>
              
              <div className="expanded-item">
                <h3>Estudios especializados</h3>
                <p></p>
              </div>
              
              <div className="expanded-item">
                <h3>Elaboración de plan de trabajo</h3>
                <p></p>
              </div>
              
              <div className="expanded-item">
                <h3>Trámites y acompañamiento E2E 
                </h3>
                <p></p>
              </div>
            </div>
            
            <div className="expanded-image-container">
              <img 
                src="/red.jpg" 
                alt="Código de Red 2.0" 
                className="expanded-image"
              />
            </div>
          </div>
          
          <div className="codigo-additional-content">
            <div className="codigo-info-banner">
              <h3>El cumplimiento de Código de Red 2.0 es obligatorio para todas las empresas conectadas en media y alta tensión.</h3>
            </div>
            
            <div className="codigo-diagram-container">
              <img 
                src="/codigo.png" 
                alt="Detalles del Código de Red 2.0" 
                className="expanded-image full-width"
              />
            </div>
          </div>
        </div>
      );
    }
    else if (cardType === "proyecto") {
      return (
        <div className="expanded-content">
          <div className="expanded-main">
            <div className="expanded-text">
              <div className="expanded-item">
                <h3>Diseño de proyectos</h3>
                <p>Diseño integral de sistemas eléctricos adaptados a sus necesidades específicas.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Cálculos eléctricos</h3>
                <p>Cálculos precisos para garantizar el correcto dimensionamiento de su instalación.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Planos y diagramas</h3>
                <p>Elaboración de planos detallados y diagramas unifilares conforme a normativas.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Memorias técnicas</h3>
                <p>Documentación técnica completa que respalda el diseño de su proyecto.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Presupuestos</h3>
                <p>Elaboración de presupuestos detallados para la implementación del proyecto.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Gestión de permisos</h3>
                <p>Apoyo en la obtención de permisos y licencias necesarios para su proyecto.</p>
              </div>
            </div>
            
            <div className="expanded-image-container">
              <img 
                src="/api/placeholder/400/320" 
                alt="Desarrollo de proyecto eléctrico" 
                className="expanded-image"
              />
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  return (
    <>
      <motion.div
        ref={ref}
        className={`feature-card ${isExpandable ? 'expandable' : ''}`}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { 
            opacity: 1, 
            y: 0,
            transition: { duration: 0.5, delay: index * 0.1 }
          }
        }}
        initial="hidden"
        animate={controls}
        onClick={handleCardClick}
      >
        <div className="feature-icon">{icon}</div>
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="expanded-card-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="expanded-card"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button className="close-button" onClick={handleCloseClick}>×</button>
              <h2 className="expanded-title">{title}</h2>
              {renderExpandedContent()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Features = () => {
  const featuresData = [
    {
      icon: "📊",
      title: "Estudios especializados",
      description: "Análisis detallados y estudios técnicos para optimizar sus sistemas eléctricos.",
      expandable: true,
      cardType: "estudios"
    },
    {
      icon: "📝",
      title: "Código de Red 2.0",
      description: "Implementación y cumplimiento de las normativas actuales del Código de Red.",
      expandable: true,
      cardType: "codigo"
    },
    {
      icon: "🔌",
      title: "Desarrollo de proyecto eléctrico",
      description: "Diseño y planificación integral de proyectos eléctricos a medida.",
      expandable: true,
      cardType: "proyecto"
    },
    {
      icon: "⚡",
      title: "Instalaciones eléctricas",
      description: "Montaje y puesta en marcha de instalaciones eléctricas con los más altos estándares."
    },
    {
      icon: "🛒",
      title: "Venta de equipos eléctricos",
      description: "Suministro de equipos de alta calidad para todo tipo de necesidades eléctricas."
    },
    {
      icon: "👨‍🏫",
      title: "Cursos de capacitación especializados",
      description: "Formación técnica para profesionales del sector eléctrico."
    }
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.1 });
  
  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  return (
    <section className="section features" ref={ref}>
      <motion.h2
        className="section-title"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }
        }}
        initial="hidden"
        animate={controls}
      >
        Servicios
      </motion.h2>
      
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <FeatureCard 
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            index={index}
            parentInView={isInView}
            isExpandable={feature.expandable}
            cardType={feature.cardType}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;