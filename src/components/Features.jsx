// src/components/Features.jsx
import React, { useRef, useState } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import '../styles/components/Features.css';
import { FaChartBar, FaClipboardList, FaPlug, FaUserGraduate, 
         FaUserTie, FaTools, FaUserCog, FaCircle, FaBullseye, FaPuzzlePiece, FaUsersCog } from 'react-icons/fa';
import { FaUserGear } from "react-icons/fa6";
import { BsGearFill, BsLightningFill, BsPeopleFill } from 'react-icons/bs';

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
                <h3>Trámites y acompañamiento E2E</h3>
                <p></p>
              </div>
            </div>
            
            <div className="expanded-image-container codigo-images-container">
              <div className="codigo-partner-logos">
              <img 
                src="/red.jpg" 
                alt="Código de Red 2.0" 
                className="expanded-image"
              />  
                <div className="pqbarcon-logo">
                  <a href="https://pqbarcon.com" target="_blank" rel="noopener noreferrer">
                    <img 
                      src="/pq2.png" 
                      alt="PQBarcon Distribuidor Autorizado" 
                      className="pqbarcon-image"
                    />
                  </a>
                </div>
              </div>

            </div>
          </div>
          
          <div className="codigo-additional-content">
            <div className="codigo-info-banner">
              <h3>El cumplimiento de Código de Red 2.0 es obligatorio para todas las empresas conectadas en media y alta tensión.</h3>
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
                <h3>Ampliaciones, cambios de layout</h3>
                <p>Adaptación de instalaciones existentes a nuevas necesidades operativas.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Elaboración/actualización de diagramas unifilares</h3>
                <p>Desarrollo y modernización de documentación técnica esencial.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Desarrollo de proyecto eléctrico E2E</h3>
                <p>Gestión completa desde el diseño hasta la implementación final.</p>
              </div>
              
              <div className="expanded-item">
                <h3>Servicios de auditoría de instalaciones eléctricas UVIE</h3>
                <p>Verificación especializada de cumplimiento normativo y seguridad.</p>
              </div>
            </div>
            
            <div className="expanded-image-container">
              <img 
                src="/proyectos.png" 
                alt="Desarrollo de proyecto eléctrico" 
                className="expanded-image"
              />
            </div>
          </div>
        </div>
      );
    }
    else if (cardType === "cursos") {
      return (
        <div className="expanded-content cursos-expanded">
          <div className="cursos-header">
            <h2>Cursos de capacitación especializados</h2>
          </div>
          
          <div className="cursos-grid">
            {/* Columna 1 - Dirigidos a */}
            <div className="cursos-column dirigidos-column">
              <div className="cursos-icon-container">
              <FaUserGear className="cursos-large-icon" />
              </div>
              <h3 className="cursos-subtitle">Dirigidos a personal de mantenimiento / operaciones / Personas interesadas en los temas</h3>
              <ul className="cursos-list">
                <li>
                  <FaUserTie className="cursos-icon" />
                  <span>Gerencias/ Jefaturas</span>
                </li>
                <li>
                  <FaTools className="cursos-icon" />
                  <span>Supervisión</span>
                </li>
                <li>
                  <FaUserCog className="cursos-icon" />
                  <span>Operativos</span>
                </li>
              </ul>
            </div>
            
            {/* Columna 2 - Desarrollo personalizado */}
            <div className="cursos-column desarrollo-column">
              <div className="cursos-icon-container">
                <BsGearFill className="cursos-large-icon" />
              </div>
              <h3 className="cursos-subtitle">Desarrollo personalizado</h3>
              <p>En función del déficit de:</p>
              <ul className="cursos-list">
                <li>
                  <FaCircle className="cursos-bullet" />
                  <span>Conocimiento</span>
                </li>
                <li>
                  <FaCircle className="cursos-bullet" />
                  <span>Habilidades</span>
                </li>
                <li>
                  <FaCircle className="cursos-bullet" />
                  <span>Capacidad</span>
                </li>
              </ul>
            </div>
            
            {/* Columna 3 - Específicos */}
            <div className="cursos-column especificos-column">
              <div className="cursos-icon-container">
                <FaBullseye className="cursos-large-icon" />
              </div>
              <h3 className="cursos-subtitle">Específicos</h3>
              <p>Acorde a lo que se espera de los participantes:</p>
              <ul className="cursos-list">
                <li>
                  <FaCircle className="cursos-bullet" />
                  <span>Conducta/ Comportamiento/ Acciones</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="cursos-grid second-row">
            {/* Columna 4 - Aplicación de 3 modelos */}
            <div className="cursos-column modelos-column">
              <div className="cursos-icon-container">
                <FaPuzzlePiece className="cursos-large-icon" />
              </div>
              <h3 className="cursos-subtitle">Aplicación de 3 modelos</h3>
              <p>Definición óptima:</p>
              <ul className="cursos-list">
                <li>
                  <FaCircle className="cursos-bullet" />
                  <span>Contenido</span>
                </li>
                <li>
                  <FaCircle className="cursos-bullet" />
                  <span>Actividades</span>
                </li>
                <li>
                  <FaCircle className="cursos-bullet" />
                  <span>Evaluación</span>
                </li>
              </ul>
            </div>
            
            {/* Columna 5 - Individual/Grupal */}
            <div className="cursos-column individual-column">
              <div className="cursos-icon-container">
                <BsPeopleFill className="cursos-large-icon" />
              </div>
              <h3 className="cursos-subtitle">Individual/ Grupal</h3>
              <div className="cursos-image-container">
                <img src="/teamwork.png" alt="Trabajo en equipo" className="cursos-image" />
              </div>
            </div>
          </div>
        </div>
      );
    }
    
    return null;
  };
  
  // Renderizar icono basado en tipo o usar el emoji como fallback
  const renderIcon = () => {
    if (typeof icon === 'string') {
      if (cardType === "estudios") return <FaChartBar className="feature-icon-svg" />;
      if (cardType === "codigo") return <FaClipboardList className="feature-icon-svg" />;
      if (cardType === "proyecto") return <FaPlug className="feature-icon-svg" />;
      if (cardType === "cursos") return <FaUserGraduate className="feature-icon-svg" />;
      
      return <div className="feature-icon">{icon}</div>;
    }
    
    return icon;
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
        {renderIcon()}
        <h3 className="feature-title">{title}</h3>
        <p className="feature-description">{description}</p>
      </motion.div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className={`expanded-card-overlay ${cardType === "cursos" ? "cursos-overlay" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className={`expanded-card ${cardType === "cursos" ? "cursos-card" : ""}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <button className="close-button" onClick={handleCloseClick}>×</button>
              {cardType !== "cursos" && <h2 className="expanded-title">{title}</h2>}
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
      icon: <FaChartBar className="feature-icon-svg" />,
      title: "Estudios especializados",
      expandable: true,
      cardType: "estudios"
    },
    {
      icon: <FaClipboardList className="feature-icon-svg" />,
      title: "Código de Red 2.0",
      expandable: true,
      cardType: "codigo"
    },
    {
      icon: <FaPlug className="feature-icon-svg" />,
      title: "Proyecto / Instalaciones eléctricas",
      expandable: true,
      cardType: "proyecto"
    },
    {
      icon: <FaUserGraduate className="feature-icon-svg" />,
      title: "Cursos de capacitación especializados",
      expandable: true,
      cardType: "cursos"
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