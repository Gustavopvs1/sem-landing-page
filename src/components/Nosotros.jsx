import React, { useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Award, BookOpen, Briefcase, TrendingUp } from 'lucide-react';
import { FaRegLightbulb, FaBrain, FaBalanceScale, FaChartBar } from 'react-icons/fa';
import '../styles/components/Nosotros.css';
import ElectricalSystem from './ElectricalSystem'; // Importamos el componente
import PowerQuality from './PowerQuality'; // Importamos el componente
import CodigoRed from './CodigoRed'; // Importamos el nuevo componente

const getColorForService = (index) => {
  const colors = ['#0088ce', '#0088ce', '#183a7e', '#7652a1'];
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
const DiferenciadorItem = ({ color, hoverColor, icon, title, position, description }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  
  return (
    <div 
      className={`diferenciador-cuadrado ${position}`}
      style={{ backgroundColor: isHovered ? hoverColor : color }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      <div className="diferenciador-icon">
        {icon}
      </div>
      
      {isHovered && (
        <div className="diferenciador-tooltip">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      )}
    </div>
  );
};


// Componente para el cuadrado de diferenciadores
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
        color="#FFD700"
        hoverColor="#FFCC00"
        icon={<FaRegLightbulb size={28} />}
        title="Experiencia"
        description="Amplia trayectoria profesional en el sector"
        position="top-left"
      />
      <DiferenciadorItem 
        color="#DC143C"
        hoverColor="#C01234"
        icon={<FaBrain size={28} />}
        title="Conocimiento"
        description="Expertise técnico especializado"
        position="top-right"
      />
      <DiferenciadorItem 
        color="#C0C0C0"
        hoverColor="#A0A0A0"
        icon={<FaBalanceScale size={28} />}
        title="Accountability"
        description="Responsabilidad en resultados"
        position="bottom-left"
      />
      <DiferenciadorItem 
        color="#00308F"
        hoverColor="#002570"
        icon={<FaChartBar size={28} />}
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
      borderColor: "#0088ce"
    },
    {
      imageUrl: "/consultoria.png",
      title: "Consultoría",
      borderColor: "#0088ce"
    },
    {
      imageUrl: "/e2e.png",
      title: "Soluciones E2E", 
      borderColor: "#183a7e" 
    },
    {
      imageUrl: "/venta.png",
      // Aquí cambiamos el título para incluir un salto de línea
      title: "Venta de\nequipos eléctricos",
      borderColor: "#7652a1" 
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
        className="section small-about"
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
        <div className="about-container">
          <h2 className="section-title">Mala calidad de la potencia</h2>
          <p className="about-description">
            Se tiene un problema de calidad de potencia cuando debido a algún disturbio en los sistemas eléctricos, 
            se provocan alteraciones en los valores nominales en la Tensión, Corriente o Frecuencia, 
            lo que terminará afectando a la operación y vida útil de los equipos conectados.
          </p>
        </div>
      </motion.section>

      
      {/* Sección de calidad de potencia */}
      <PowerQuality />

      {/* Nueva sección de Código de Red 2.0 */}
      <CodigoRed />

    </div>
  );
};

export default Nosotros;