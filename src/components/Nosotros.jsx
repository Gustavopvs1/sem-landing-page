import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { TbTargetArrow } from "react-icons/tb";
import { FaUserGraduate, FaGears, FaBullseye, FaUserCheck } from "react-icons/fa6";
import '../styles/components/Nosotros.css';
import ElectricalSystem from './ElectricalSystem'; // Importamos el componente
import PowerQuality from './PowerQuality'; // Importamos el componente
import CodigoRed from './CodigoRed'; // Importamos el nuevo componente
import ReduceCostos from './ReduceCostos'; // Importamos el componente de reducción de costos

const getColorForService = (index) => {
  const colors = ['#0032bd', '#0032bd', '#0032bd', '#0032bd'];
  return colors[index] || colors[0];
};

// Componente de servicio individual
const ServiceCard = ({ title, icon, index, parentInView, imageUrl }) => {
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
  
  return (
    <motion.div
      ref={ref}
      className="service-card"
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
    >
      {/* Imagen dentro del contenedor, pero sin bordes adicionales */}
      <div className="service-icon">
        {imageUrl && <img src={imageUrl} alt={title} className="service-image" />}
      </div>
      <h3 className="service-label" style={{ color: getColorForService(index) }}>{title}</h3>
    </motion.div>
  );
};

// Nuevo componente para el diferenciador individual
// Nuevo componente para el diferenciador individual
// Nuevo componente para el diferenciador individual
const DiferenciadorItem = ({ color, hoverColor, icon, title, position, description }) => {
  return (
    <div className={`diferenciador-contenedor ${position}`}>
      {(position === 'top-left' || position === 'bottom-left') && (
        <div className="diferenciador-texto left">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
      
      <div 
        className="diferenciador-cuadrado"
        style={{ backgroundColor: color }}
      >
        <div className="diferenciador-icon">
          {icon}
        </div>
      </div>
      
      {(position === 'top-right' || position === 'bottom-right') && (
        <div className="diferenciador-texto right">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};

// Componente para el cuadrado de diferenciadores (se mantiene igual)
const DiferenciadoresCuadrado = () => {
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
  
  return (
    <motion.div 
      className="diferenciadores-container"
      ref={ref}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.6 }
        }
      }}
      initial="hidden"
      animate={controls}
    >
      <h2 className="section-title">Nuestros diferenciadores</h2>
      
      <div className="cuadrado-container">
        <DiferenciadorItem 
          color="#ffffff"
          hoverColor="#ffffff"
          icon={<FaUserGraduate size={35} />}
          title="Experiencia"
          description="Amplia trayectoria profesional en el sector"
          position="top-left"
        />
        <DiferenciadorItem 
          color="#ffffff"
          hoverColor="#ffffff"
          icon={<FaUserCheck size={35} />}
          title="Conocimiento"
          description="Expertise técnico especializado"
          position="top-right"
        />
        <DiferenciadorItem 
          color="#ffffff"
          hoverColor="#ffffff"
          icon={<FaGears size={35} />}
          title="Accountability"
          description="Claridad, seguimiento, transparencia, resultados."
          position="bottom-left"
        />
        <DiferenciadorItem 
          color="#ffffff"
          hoverColor="#ffffff"
          icon={<TbTargetArrow size={35} />}
          title="Resultados"
          description="Soluciones con impacto medible"
          position="bottom-right"
        />
      </div>
    </motion.div>
  );
};
const Nosotros = () => {

  const servicesData = [
    {
      imageUrl: "/capacitacion.png",
      title: "Capacitación",
      borderColor: "#0078a9"
    },
    {
      imageUrl: "/consultoria.png",
      title: "Consultoría",
      borderColor: "#0078a9"
    },
    {
      imageUrl: "/e2e.png",
      title: "Soluciones E2E", 
      borderColor: "#0078a9" 
    },
    {
      imageUrl: "/venta.png",
      // Aquí cambiamos el título para incluir un salto de línea
      title: "Venta de\nequipos eléctricos",
      borderColor: "#0078a9" 
    }
  ];

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  const smallTextRef = useRef(null);
  const smallTextInView = useInView(smallTextRef, { amount: 0.3 });
  const smallTextControls = useAnimation();
  
  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  React.useEffect(() => {
    if (smallTextInView) {
      smallTextControls.start('visible');
    } else {
      smallTextControls.start('hidden');
    }
  }, [smallTextInView, smallTextControls]);
  
  return (
    <div className="nosotros-wrapper">
      <section className="section about" ref={ref}>
        <div className="about-container">
          <motion.div 
            className="about-text"
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
            <h2 className="section-title">¿Quiénes somos?</h2>
            <p className="about-description">
              Somos un grupo de profesionales con mas de 25 años de experiencia 
              enfocados en ofrecer servicios y soluciones que trasciendan en el 
              impacto y resultados en el negocio de nuestros clientes.
            </p>
          </motion.div>
          
          <div className="services-scroll-container">
            <h2 className="section-title">¿Qué ofrecemos?</h2>
            <div className="services-grid">
              {servicesData.map((service, index) => (
                <div key={index} className="service-column">
                  <ServiceCard 
                    imageUrl={service.imageUrl}
                    title={service.title}
                    index={index}
                    parentInView={isInView}
                  />
                </div>
              ))}
            </div>
          </div>
                    
          {/* Componente de diferenciadores */}
          <DiferenciadoresCuadrado />
        </div>
      </section>
      
      {/* Sección del sistema eléctrico */}
      <ElectricalSystem />

        {/* Sección de mala calidad de potencia */}
        <motion.section 
          className="power-quality-section2"
          ref={smallTextRef}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.6 }
            }
          }}
          initial="hidden"
          animate={smallTextControls}
        >
          <div className="power-quality-container2">
            <h2 className="power-quality-title2">Mala calidad de<br />la potencia</h2>
            <div className="power-quality-content2">
              <p>
                Se tiene un problema de <span className="text-blue">calidad de potencia </span> 
                cuando <span className="text-blue">debido a algún</span> <span className="text-red">disturbio</span> <span className="text-blue">en los 
                sistemas eléctricos, se</span> <span className="text-blue">provocan 
                alteraciones en los valores nominales en la </span> 
                <span className="text-red">Tensión, Corriente o Frecuencia,</span> <span className="text-blue">lo que 
                terminará afectando a la operación y vida útil 
                de los equipos conectados.</span>
              </p>
            </div>
          </div>
        </motion.section>
      
      {/* Sección de calidad de potencia */}
      <PowerQuality />

      {/* Nueva sección de Código de Red 2.0 */}
      <CodigoRed />

      <ReduceCostos />

    </div>
  );
};

export default Nosotros;