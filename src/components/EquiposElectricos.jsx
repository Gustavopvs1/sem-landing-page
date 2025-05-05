// src/components/EquiposElectricos.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../styles/components/EquiposElectricos.css';

const EquiposElectricos = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProduct, setActiveProduct] = useState('merus');
  const [selectedBanco, setSelectedBanco] = useState(null);
  
  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 }
    }
  };

  const cardVariants = {
    initial: { scale: 1 },
    hover: { 
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  const merusFeatures = [
    {
      title: "Filtrado activo de armónicas",
      image: "filtrado.png",
      description: "Merus®A2 mide las corrientes armónicas presentes en una instalación eléctrica y en tiempo real inyecta las mismas armónicas pero con un ángulo de fase opuesto, de esta forma las cancela. Merus®A2 asegura el cumplimiento de la IEEE 519, G/4, EN 50160 en lo que respecta a los límites de distorsión armónica."
    },
    {
      title: "Compensación dinámica de potencia reactiva",
      image: "compensacion.png",
      description: "Merus®A2 proporciona una compensación dinámica de potencia reactiva, corrigiendo el factor de potencia, variación de voltaje y la mitigación de flickers. Esto mejora notablemente la eficiencia en el sistema eléctrico lo que se traduce a su vez en ahorros económicos."
    },
    {
      title: "Balanceo de corriente",
      image: "balanceo.png",
      description: "Las cargas bifásicas generan desbalance de voltaje entre las fases. Merus®A2 realiza un balanceo dinámico que distribuye las carga de forma equitativa entre las tres fases, lo cual evita sobrecargar el sistema eléctrico."
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % merusFeatures.length);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + merusFeatures.length) % merusFeatures.length);
  };

  const productos = [
    {
      id: 'merus',
      name: 'Merus A2',
      subtitle: 'Filtro activo de armónicas',
      description: 'Merus®A2 es una línea de filtros activos de armónicos que destaca por su rápida operación, robustez, versatilidad y tamaño compacto.',
      beneficios: 'Alcance mayor productividad, reduzca tiempos muertos de producción, extienda la vida útil de sus equipos y componentes, reduzca el costo de mantenimiento y ahorre energía con Merus®A2.',
      image: 'merus2.png',
      featured: true
    },
    // Espacio para futuros productos
  ];
  
  // Nuevos productos de bancos de capacitores
  const bancosCapacitores = [
    {
      id: 'banco-fijo',
      name: 'Banco de capacitores fijo con reactores de rechazo',
      image: 'imagen1.png',
      info: [
        'Los bancos de capacitores fijos con reactor de rechazo son ampliamente utilizados para corregir el factor de potencia en instalaciones con demanda de kVAr constante y presencia de contaminación armónica.',
        'Los reactores de rechazo permiten su operación en sistemas con cargas de 5ª y 7ª armónica, bajo especificación del cliente se pueden suministrar para operación con cargas de la 3ª armónica.',
        'Su construcción integra capacitores con mecanismo de sobrepresión y unión entre celdas libre con anillo de conexión (libre de soldadura). Los reactores Polygap patentados garantizan el balanceo de fases.',
        'Disponibles en rangos de 50 – 2500 kVars y tensiones de operación de 240,480 y 600V.',
        '2 años de garantía en equipos activos y 7 años de garantía en equipos pasivos.'
      ]
    },
    {
      id: 'banco-automatico',
      name: 'Banco automático con reactor de rechazo',
      image: 'imagen2.png',
      info: [
        'Los bancos automáticos de capacitores con reactor de rechazo son ideales para corregir el factor de potencia en instalaciones con demanda de kVAr variable y presencia de contaminación armónica.',
        'Los reactores de rechazo permiten su operación en sistemas con cargas de 5ª y 7ª armónica, bajo especificación del cliente se pueden suministrar para operación con cargas de la 3ª armónica.',
        'El relé de control realiza la medición en los 4 cuadrantes, diagnóstico con alarmas y reportería (Ethernet y Modbus sobre pedido).',
        'Disponibles en rangos de 50 – 1200 kVars y tensiones de operación de 240,480 y 600V.',
        '2 años de garantía en equipos activos y 7 años de garantía en equipos pasivos.'
      ]
    },
    {
      id: 'banco-tiristorizado',
      name: 'Banco automático tiristorizado',
      image: 'imagen3.png',
      info: [
        'El control eléctrico de los módulos del tiristor permite un switcheo rápido con bajas perturbaciones en la red.',
        'Se eliminan por completo los componentes mecánicos.',
        'Tienen un voltaje de bloqueo de 18 kV y diseño que amplifica su esperanza de vida.',
        'Soportan tiempos de operación más largos, ideal para trabajar con sistemas de compensación dentro de la red.',
        'No requieren mantenimiento debido a su diseño robusto, las aletas del disipador y el ventilador pueden necesitar limpieza periódica.',
        'Los componentes principales como los capacitores, reactores, tiristores y el módulo de control son diseñados y fabricados en Alemania.',
        'Funcionan en condiciones nominales en un rango de temperaturas de -10°C hasta 45°C y 1,000 m sobre el nivel del mar.'
      ]
    }
  ];

  const handleBancoClick = (id) => {
    if (selectedBanco === id) {
      setSelectedBanco(null);
    } else {
      setSelectedBanco(id);
    }
  };

  const closeModal = () => {
    setSelectedBanco(null);
  };
  
  return (
    <section id="equipos" className="section equipos-electricos" ref={ref}>
      <motion.div 
        className="equipos-container"
        variants={containerVariants}
        initial="hidden"
        animate={controls}
      >
        <motion.h2 
          className="equipos-title"
          variants={itemVariants}
        >
          Venta de Equipos Eléctricos
        </motion.h2>
        
        <motion.div
          className="equipos-content"
          variants={itemVariants}
        >
          {productos.length > 0 ? (
            <>
              {/* Producto destacado - Merus A2 */}
              {productos.filter(p => p.id === 'merus').map(producto => (
                <div key={producto.id} className="producto-destacado">
                  <div className="producto-destacado-content">
                    <div className="producto-info">
                      <h3 className="producto-title">
                        <span className="producto-name">{producto.name}</span>
                        <span className="producto-subtitle">{producto.subtitle}</span>
                      </h3>
                      <p className="producto-description">{producto.description}</p>
                      <p className="producto-beneficios">{producto.beneficios}</p>
                    </div>
                    <div className="producto-imagen">
                      <img src={producto.image} alt={producto.name} />
                    </div>
                  </div>
                  
                  {/* Carrusel de características */}
                  <div className="caracteristicas-carousel">
                    <button className="carousel-btn prev" onClick={prevSlide}>
                      <ChevronLeft size={24} />
                    </button>
                    
                    <div className="caracteristicas-slide">
                      <h4 className="caracteristica-titulo">{merusFeatures[activeSlide].title}</h4>
                      <div className="caracteristica-content">
                        <div className="caracteristica-imagen">
                          <img src={merusFeatures[activeSlide].image} alt={merusFeatures[activeSlide].title} />
                        </div>
                        <p className="caracteristica-descripcion">
                          {merusFeatures[activeSlide].description}
                        </p>
                      </div>
                    </div>
                    
                    <button className="carousel-btn next" onClick={nextSlide}>
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Indicadores de slide */}
                  <div className="carousel-indicators">
                    {merusFeatures.map((_, index) => (
                      <span 
                        key={index} 
                        className={`indicator ${activeSlide === index ? 'active' : ''}`}
                        onClick={() => setActiveSlide(index)}
                      />
                    ))}
                  </div>
                </div>
              ))}

              {/* Nueva sección de bancos de capacitores */}
              <motion.div 
                className="bancos-capacitores-section"
                variants={itemVariants}
              >
                <h3 className="bancos-title">Bancos de Capacitores y Equipos Complementarios</h3>
                <div className="bancos-grid">
                  {bancosCapacitores.map((banco) => (
                    <motion.div
                      key={banco.id}
                      className="banco-item"
                      variants={cardVariants}
                      initial="initial"
                      whileHover="hover"
                      onClick={() => handleBancoClick(banco.id)}
                    >
                      <motion.div 
                        className="banco-image-container"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img src={banco.image} alt={banco.name} className="banco-image" />
                      </motion.div>
                      <h3 className="banco-name">{banco.name}</h3>
                    </motion.div>
                  ))}
                </div>

                {/* Modal para mostrar información detallada */}
                <AnimatePresence>
                  {selectedBanco && (
                    <motion.div 
                      className="banco-modal-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={closeModal}
                    >
                      <motion.div 
                        className="banco-modal-content"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button className="modal-close-btn" onClick={closeModal}>
                          <X size={24} />
                        </button>

                        {bancosCapacitores.filter(banco => banco.id === selectedBanco).map(banco => (
                          <div key={banco.id} className="banco-modal-info">
                            <div className="banco-modal-header">
                              <img src={banco.image} alt={banco.name} className="banco-modal-image" />
                              <h3 className="banco-modal-title">{banco.name}</h3>
                            </div>
                            <div className="banco-modal-body">
                              <ul className="banco-info-list">
                                {banco.info.map((item, index) => (
                                  <li key={index} className="banco-info-item">{item}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {/* Espacio para futuros productos en formato grid */}
              {productos.length > 1 && (
                <div className="equipos-grid">
                  {productos.filter(p => !p.featured).map(producto => (
                    <motion.div
                      key={producto.id}
                      className="equipo-item"
                      variants={cardVariants}
                      initial="initial"
                      whileHover="hover"
                      onClick={() => setActiveProduct(producto.id)}
                    >
                      <div className="equipo-image">
                        <img src={producto.image} alt={producto.name} />
                      </div>
                      <h3 className="equipo-name">{producto.name}</h3>
                      <p className="equipo-description">{producto.subtitle}</p>
                    </motion.div>
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="equipos-placeholder">
              Próximamente mostraremos nuestro catálogo de equipos eléctricos con especificaciones detalladas.
            </p>
          )}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default EquiposElectricos;