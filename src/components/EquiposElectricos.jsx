// src/components/EquiposElectricos.jsx
import React, { useState, useRef } from 'react';
import { motion, useInView, useAnimation, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import '../styles/components/EquiposElectricos.css';
import { FaEnvelope } from 'react-icons/fa';

const EquiposElectricos = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.2 });
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProduct, setActiveProduct] = useState('merus');
  const [activeZucchiniSlide, setActiveZucchiniSlide] = useState(0);
  const [activeHPQSlide, setActiveHPQSlide] = useState(0);
  const [selectedBanco, setSelectedBanco] = useState(null);
  const [selectedAdicional, setSelectedAdicional] = useState(null);
  const [showTooltipMerus, setShowTooltipMerus] = useState(false);
  const [showTooltipZucchini, setShowTooltipZucchini] = useState(false);
  const [showTooltipHPQ, setShowTooltipHPQ] = useState(false);
  
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

  const tooltipVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
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
    },
   {
      title: "Aplicaciones de los filtros activos de armónicas Merus A2",
      subtitle: "Centros comerciales, data centers, edificios, hospitales, aeropuertos y más",
      image: "merus3.jpg",
      description: "<strong>Centros comerciales, data centers, edificios, hospitales, aeropuertos y más:</strong> Establecimientos que no se encuentran exentos de problemas debido a la baja calidad de potencia y en donde es extremadamente importante evitar el malfuncionamiento de los equipos eléctricos que pueden representar una amenaza de vida para las personas."
    },
    {
      title: "Aplicaciones de los filtros activos de armónicas Merus A2",
      subtitle: "Industria manufacturera, industria con procesos críticos, Industria ligera con rápidas fluctuaciones de carga y más",
      image: "merus3.jpg",
      description: "<strong>Industria manufacturera, industria con procesos críticos, Industria ligera con rápidas fluctuaciones de carga y más:</strong> La automatización en la industria crece cada día y con ella se agravan los problemas de calidad de potencia. Los drives variadores de frecuencia y otras cargas de rápida fluctuación requieren de electricidad de alta calidad para funcionar adecuadamente y asegurar continuidad de las operaciones."
    },
    {
      title: "Aplicaciones de los filtros activos de armónicas Merus A2",
      subtitle: "Industria pesada: Acereras, Minería, Oil&Gas",
      image: "merus3.jpg",
      description: "<strong>Industria pesada: Acereras, Minería, Oil&Gas:</strong> La industria acerera, cementera y minera consume grandes cantidades de energía generando a su vez todos los problemas de calidad de potencia, por lo que corregirlos tendrán un gran impacto en el incremento de eficiencia de producción, incremento de capacidad, reducción de costos de mantenimiento y mayor vida útil de la maquinaria."
    }
  ];

  const nextSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide + 1) % merusFeatures.length);
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide - 1 + merusFeatures.length) % merusFeatures.length);
  };

  const merusTooltipData = {
    features: [
      {
        category: "Tecnología IGBT con topología de 3 niveles que asegura:",
        items: [
          "Alto desempeño",
          "Bajas pérdidas",
          "Bajo nivel de ruido"
        ]
      },
      {
        category: "Capacidades:",
        items: [
          "Capaz de filtrar simultáneamente desde la 2da. hasta la 50va. Armónica",
          "Capaz compensar potencia reactiva de tipo inductivo o capacitivo"
        ]
      },
      {
        category: "Fácil de integrar:",
        items: [
          "En gabinetes eléctricos",
          "Acceso a mantenimiento",
          "No requiere de fuentes de alimentación o controles externos"
        ]
      },
      {
        category: "Conectividad:",
        items: [
          "2 x ETHERNET+Modbus TCP"
        ]
      },
      {
        category: "Características SMART:",
        items: [
          "Derating de temperatura lineal",
          "Rearranque automático después de apagones o condiciones de riesgo para el módulo",
          "Función de Stand by para ahorro de energía"
        ]
      },
      {
        category: "Merus® A2 ha demostrado:",
        items: [
          "Ser una solución robusta con larga vida útil",
          "No presenta complicaciones de lógica maestro esclavo",
          "Alta redundancia"
        ]
      },
      {
        category: "Versatilidad en un solo módulo:",
        items: [
          "Tensión de operación (220...480...690 Vca)",
          "3 hilos / 4 hilos",
          "50 / 60 Hz"
        ]
      },
      {
        category: "Otras características:",
        items: [
          "Entradas y salidas digitales preprogramadas",
          "Múltiples módulos en paralelo",
          "Configuración para lazos abiertos o cerrados",
          "Clasificación UL508 y CSA"
        ]
      }
    ]
  };

  const productos = [
    {
      id: 'merus',
      name: 'Merus A2',
      subtitle: 'Filtro activo de armónicas',
      description: 'Merus®A2 es una línea de filtros activos de armónicos que destaca por su rápida operación, robustez, versatilidad y tamaño compacto.',
      beneficios: 'Características generales',
      image: 'merus5.png',
      featured: true
    },
    // Espacio para futuros productos
  ];
  
  // Bancos de capacitores
  const bancosCapacitores = [
    {
      id: 'banco-fijo',
      name: 'Banco de capacitores fijo con reactores de rechazo',
      image: 'fijo.png',
      ficha: '/Ficha técnica Banco-de-Capacitores-Fijo-con-Reactor-de-Rechazo.pdf',
      info: [
        'Los bancos de capacitores fijos con reactor de rechazo son ampliamente utilizados para corregir el factor de potencia en instalaciones con demanda de kVAr constante y presencia de contaminación armónica.',
        'Los reactores de rechazo permiten su operación en sistemas con cargas de 5ª y 7ª armónica, bajo especificación del cliente se pueden suministrar para operación con cargas de la 3ª armónica.',
        'Su construcción integra capacitores con mecanismo de sobrepresión y unión entre celdas libre con anillo de conexión (libre de soldadura). Los reactores Polygap patentados garantizan el balanceo de fases.',
        'Disponibles en rangos de 50 – 2500 kVars y tensiones de operación de 240,480 y 600V.',
        '2 años de garantía en equipos activos y 7 años de garantía en equipos pasivos.',
      ]
    },
    {
      id: 'banco-automatico',
      name: 'Banco de capacitores automático con reactor de rechazo',
      image: 'rechazo.png',
      ficha: '/Ficha técnica Banco-de-Capacitores-Automatico-con-Reactor de Rechazo.pdf',
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
      name: 'Banco de capacitores automático tiristorizado',
      image: 'tristo.png',
      ficha: '/Ficha técnica Banco-de Capacitores Automatico-Tiristorizado.pdf',
      info: [
        'El control eléctrico a base de tiristores permiten una conmutación rápida y con bajas perturbaciones en la red.',
        'Soportan tiempos de operación más largos.',
        'No utiliza componentes mecánicos.',
        'No requiere de mantenimiento, solo limpieza periódica.',
        'Voltaje de bloqueo de 1.8 kV que alarga su vida útil.',
        'Componentes de alta calidad (Capacitores, Reactores, Tiristores y Módulo de control son de diseño y fabricación alemana).',
        'Ficha técnica'
      ]
    },
    {
      id: 'banco-capacitores',
      name: 'Banco de capacitores fijo',
      image: 'banco.png',
      ficha: '/Ficha técnica Bancos de capacitores fijos.pdf',
      info: [
        'Los bancos de capacitores fijos se utilizan en instalaciones eléctricas en donde la demanda de potencia reactiva en constante a través del tiempo.',
        'La gama comprende capacidades desde 5 hasta 100 kVARs , acometida con o sin interruptor principal y voltajes de operación de 240,480 y 600Vca.',
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
  
  const handleAdicionalClick = (id) => {
    if (selectedAdicional === id) {
      setSelectedAdicional(null);
    } else {
      setSelectedAdicional(id);
    }
  };

  const closeModal = () => {
    setSelectedBanco(null);
    setSelectedAdicional(null);
  };
  
  return (
    <section id="equipos" className="section equipos-electricos" ref={ref}>
      <motion.div 
        className="equipos-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
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
                      <div className="producto-beneficios-box">
                        <p className="producto-beneficios">{producto.beneficios}</p>
                        <div className="mas-info-flecha"></div>
                      </div>
                      <a 
                        href="/01_Filtros-Activos-de-Armonicas- Merus A2.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ficha-link"
                      >
                        Descargar ficha técnica
                      </a>
                    </div>
                    <div 
                      className="producto-imagen"
                        onMouseEnter={() => setShowTooltipMerus(true)}
                        onMouseLeave={() => setShowTooltipMerus(false)}
                    >
                      <div className="imagen-tooltip-container">
                        <img src={producto.image} alt={producto.name} />
                        
                        {/* Tooltip para mostrar información técnica detallada */}
                        <AnimatePresence>
                          {showTooltipMerus  && (
                            <motion.div 
                              className="producto-tooltip"
                              variants={tooltipVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              drag
                              dragConstraints={{ top: -500, left: -1000, right: 500, bottom: 500 }}
                              dragElastic={0.3}
                              dragSnapToOrigin
                            >
                              <h4 className="tooltip-title">{merusTooltipData.title}</h4>
                              <div className="tooltip-content">
                                {merusTooltipData.features.map((featureGroup, groupIndex) => (
                                  <div key={groupIndex} className="tooltip-feature-group">
                                    {featureGroup.category !== "Capacidades:" && 
                                     featureGroup.category !== "Conectividad:" && 
                                     featureGroup.category !== "Otras características:" && (
                                      <h5 className="tooltip-category">{featureGroup.category}</h5>
                                    )}
                                    <ul className="tooltip-list">
                                      {featureGroup.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="tooltip-item">
                                          {item}
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
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

                        {/* ✅ Aquí está el nuevo renderizado con HTML permitido */}
                        <p 
                          className="caracteristica-descripcion"
                          dangerouslySetInnerHTML={{ __html: merusFeatures[activeSlide].description }}
                        ></p>
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

                <div className="producto-destacado">
                  <div className="producto-destacado-content">
                    <div className="producto-info">
                      <h3 className="producto-title">
                        <span className="producto-name">HPQ</span>
                        <span className="producto-subtitle">Compensador híbrido</span>
                      </h3>
                      <p className="producto-description">
                        HPQ integra en un solo equipo filtros activos y banco de capacitores desintonizados.
                      </p>
                      <div className="producto-beneficios-box">
                        <p className="producto-beneficios">Características generales</p>
                        <div className="mas-info-flecha"></div>
                      </div>
                      <a 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ficha-link"
                      >
                        Descargar ficha técnica
                      </a>
                    </div>
                    <div 
                      className="producto-imagen"
                      onMouseEnter={() => setShowTooltipHPQ(true)}
                      onMouseLeave={() => setShowTooltipHPQ(false)}
                    >
                      <div className="imagen-tooltip-container">
                        <img src="hpq.png" alt="HPQ" />
                        
                        {/* Tooltip para mostrar información técnica detallada */}
                        <AnimatePresence>
                          {showTooltipHPQ && (
                            <motion.div 
                              className="producto-tooltip"
                              variants={tooltipVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              drag
                              dragConstraints={{ top: -500, left: -1000, right: 500, bottom: 500 }}
                              dragElastic={0.3}
                              dragSnapToOrigin
                            >
                              <h4 className="tooltip-title">HPQ es un compensador híbrido de calidad de la energía. </h4>
                              <div className="tooltip-content">
                                <div className="tooltip-feature-group">
                                  <h5 className="tooltip-category">Esta solución confiable que garantiza:</h5>
                                  <ul className="tooltip-list">
                                    <li className="tooltip-item">Instantánea corrección del factor de potencia</li>
                                    <li className="tooltip-item">Mitigación de corrientes armónicas</li>
                                    <li className="tooltip-item">Corrección de desequilibrios.</li>
                                  </ul>
                                </div>
                                <div className="tooltip-feature-group">
                                  <h5 className="tooltip-category">HPQ Dispone de dos modos de operación:</h5>
                                  <ul className="tooltip-list">
                                    <li className="tooltip-item">Modo corrección de factor de potencia (FP) : es el modo tradicional en donde Las mediciones se realizan en el secundario del transformador y el equipo se configura para múltiples cargas. La velocidad de conmutación de los condensadores es menor a 1s.</li>
                                    <li className="tooltip-item">Modo Ultra –Fast (UF) : diseñado para cargas individuales que cambian rápidamente, en modo UF, los capacitores se conectan a los tiristores asegurando una conmutación menor a 20ms. Esta versión se recomienda para aplicaciones de grúas, ascensores y soldadoras.</li>
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  
                  {/* Carrusel de comparativa */}
                  <div className="caracteristicas-carousel">
                    
                  <div className="caracteristicas-slide caracteristicas-hpq">
                    <>
                      <h4 className="caracteristica-titulo">Beneficios</h4>
                      <div className="caracteristica-content">
                        <div className="caracteristica-descripcion">
                          <p>Ahorre dinero</p>
                          <p>Minimice el número de interrupciones y fallos.</p>
                          <p>Alargue la vida útil de sus equipos.</p>
                          <p>Ahorre espacio con equipos compactos.</p>
                        </div>
                      </div>
                    </>
                  </div>
                  </div>
                </div>

              {/* Sección de bancos de capacitores */}
              <motion.div 
                className="bancos-capacitores-section"
                variants={itemVariants}
              >
                <h3 className="bancos-title">Más equipos eléctricos para mejorar la calidad de energía</h3>
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
                      {banco.ficha && (
                        <a
                          href={banco.ficha}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ficha-link"
                          onClick={(e) => {
                            e.stopPropagation(); // Evita que se abra el modal al hacer clic en el enlace
                          }}
                        >
                          Descargar ficha técnica
                        </a>
                      )}
                    </motion.div>
                  ))}
                </div>

            {/* Modal para mostrar información detallada de bancos */}
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
                        className={`banco-modal-content ${['hpq', 'tableros'].includes(selectedBanco) ? 'hpq-modal' : ''}`}

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
                              <img 
                                src={banco.id === 'tableros' ? 'nbar.png' : banco.image} 
                                alt={banco.name} 
                                className="banco-modal-image" 
                              />
                              <h3 className="banco-modal-title">{banco.name}</h3>
                            </div>
                            <div className="banco-modal-body">
                              <ul className="banco-info-list">
                                {['hpq', 'tableros'].includes(banco.id) ? (
                                  banco.info.map((item, index) => {
                                    const isSubtitle = banco.id === 'hpq'
                                      ? [
                                          'HPQ es un compensador híbrido de calidad de la energía.',
                                          'Esta solución única y confiable garantiza:',
                                          'HPQ Dispone de dos modos de operación:',
                                          'Sustituye los bancos de capacitores tradicionales y mejora la calidad de la energía.'
                                        ].includes(item)
                                      : [
                                          'Marca Bticino',
                                          'Acometida',
                                          'Interruptores derivados enchufables',
                                          'Columnas acoplables tipo NEMA 1',
                                          'Montaje'
                                        ].includes(item);

                                    const isFirstParagraphs = banco.id === 'tableros' && index <= 2;

                                    return (
                                      <li 
                                        key={index} 
                                        className={`banco-info-item ${
                                          isFirstParagraphs ? 'normal-text' :
                                          isSubtitle ? 'subtitle' :
                                          'normal-text'
                                        }`}
                                      >
                                        {item}
                                      </li>
                                    );
                                  })
                                ) : (
                                  // Renderizado normal para otros productos
                                  banco.info.map((item, index) => (
                                    <li key={index} className="banco-info-item">{item}</li>
                                  ))
                                )}
                              </ul>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

             
              <motion.div 
                className="productos-adicionales-section"
                variants={itemVariants}
              >
                <h3 className="productos-adicionales-title">Equipos eléctricos para la distribución de energía</h3>
                {/* Componente para Electroducto Zucchini */}
               <div className="producto-destacado">
                  <div className="producto-destacado-content">
                    <div className="producto-info">
                      <h3 className="producto-title">
                        <span className="producto-name">Electroducto Zucchini</span>
                      </h3>
                      <p className="producto-description">
                        El sistema de Electroducto Zucchini (Bticino) es ampliamente recomendado para realizar la alimentación y derivación de energía eléctrica en diferentes topologías de cargas.
                      </p>
                      <div className="producto-beneficios-box">
                        <p className="producto-beneficios">Características generales</p>
                        <div className="mas-info-flecha"></div>
                      </div>
                      <a 
                        href="" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ficha-link"
                      >
                        Descargar ficha técnica
                      </a>
                    </div>
                    <div 
                      className="producto-imagen"
                      onMouseEnter={() => setShowTooltipZucchini(true)}
                      onMouseLeave={() => setShowTooltipZucchini(false)}
                    >
                      <div className="imagen-tooltip-container">
                        <img src="electroducto.jpg" alt="Electroducto Zucchini" />
                        
                        {/* Tooltip para mostrar información técnica detallada */}
                        <AnimatePresence>
                          {showTooltipZucchini && (
                            <motion.div 
                              className="producto-tooltip"
                              variants={tooltipVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
                              drag
                              dragConstraints={{ top: -500, left: -1000, right: 500, bottom: 500 }}
                              dragElastic={0.3}
                              dragSnapToOrigin
                            >
                              <h4 className="tooltip-title">Beneficios del Electroducto Zucchini</h4>
                              <div className="tooltip-content">
                                <div className="tooltip-feature-group">
                                  <h5 className="tooltip-category">Ahorre tiempo</h5>
                                  <ul className="tooltip-list">
                                    <li className="tooltip-item">Mayor facilidad de proyectar/cuantificar volumetría.</li>
                                    <li className="tooltip-item">Mayor facilidad de instalación</li>
                                  </ul>
                                </div>
                                <div className="tooltip-feature-group">
                                  <h5 className="tooltip-category">Ahorre dinero/ Maximice su inversión</h5>
                                  <ul className="tooltip-list">
                                    <li className="tooltip-item">Mayor durabilidad</li>
                                    <li className="tooltip-item">Mayor eficiencia</li>
                                    <li className="tooltip-item">Reutilice componentes sin riesgo (cambios lay out)</li>
                                    <li className="tooltip-item">Reduzca las dimensiones de los tableros alimentadores.</li>
                                  </ul>
                                </div>
                                <div className="tooltip-feature-group">
                                  <h5 className="tooltip-category">Reduzca riesgos</h5>
                                  <ul className="tooltip-list">
                                    <li className="tooltip-item">Mayor resistencia al fuego</li>
                                    <li className="tooltip-item">Mayor nivel de aislamiento eléctrico</li>
                                    <li className="tooltip-item">Mayor resistencia a eventos sísmicos</li>
                                    <li className="tooltip-item">Distribuya las protecciones cercanas a las cargas</li>
                                    <li className="tooltip-item">Evite contaminación electromagnética</li>
                                  </ul>
                                </div>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>
                  </div>
                  
                  {/* Carrusel de comparativa */}
                  <div className="caracteristicas-carousel">
                    <button className="carousel-btn prev" onClick={() => setActiveZucchiniSlide((prev) => prev === 0 ? 1 : 0)}>
                      <ChevronLeft size={24} />
                    </button>
                    
                    <div className="caracteristicas-slide">
                      {activeZucchiniSlide === 0 ? (
                        <>
                          <h4 className="caracteristica-titulo">Sistema tradicional con cable en charola</h4>
                          <div className="caracteristica-content">
                            <div className="caracteristica-imagen">
                              <img src="tradicional.png" alt="Sistema tradicional con cable en charola" />
                            </div>
                            <div className="caracteristica-descripcion">
                              <p>Una gran cantidad de espacio es requerido cuando se lleva más de un conductor por fase, ya que se debe cumplir los radios de curvatura en cambios de dirección a 90°.</p>
                              <p>Tan solo el tiempo y los recursos para montar solo la charola, es el mismo que se requiere para instalar electroducto.</p>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <h4 className="caracteristica-titulo">Sistema electroducto Zucchini</h4>
                          <div className="caracteristica-content">
                            <div className="caracteristica-imagen">
                              <img src="zucchini2.png" alt="Sistema electroducto Zucchini" />
                            </div>
                            <div className="caracteristica-descripcion">
                              <p>Zucchini distribuye la misma potencia en espacios reducidos, liberando espacio.</p>
                              <p>En cuanto al peso, para una misma capacidad del circuito, la solución con Zucchini en aluminio será más ligera que la solución de cable de cobre en charola.</p>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                    
                    <button className="carousel-btn next" onClick={() => setActiveZucchiniSlide((prev) => prev === 0 ? 1 : 0)}>
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Indicadores de slide */}
                  <div className="carousel-indicators">
                    <span 
                      className={`indicator ${activeZucchiniSlide === 0 ? 'active' : ''}`}
                      onClick={() => setActiveZucchiniSlide(0)}
                    />
                    <span 
                      className={`indicator ${activeZucchiniSlide === 1 ? 'active' : ''}`}
                      onClick={() => setActiveZucchiniSlide(1)}
                    />
                  </div>
                </div>
                
                {/* Electroductos de alta potencia */}
                <div className="electroductos-seccion">
                  <h3 className="electroductos-title">Electroductos Zucchini</h3>
                  
                  <div className="electroductos-grid">
                    {/* XCP-HP */}
                    <div className="electroducto-card">
                      <div className="electroducto-header">
                        <h4 className="electroducto-name">
                          Electroducto alta potencia <span className="electroducto-highlight">XCP-HP</span>
                        </h4>
                        
                        {/* Descripción movida después del título */}
                        <div className="electroducto-description">
                          <p>XCP-HP se caracteriza por su alta eficiencia dado su bajo nivel de pérdidas por efecto Joule y su capacidad para operar a temperatura ambiente de hasta 50°C. La sección de las barras internas permite ofrecer un tamaño compacto.</p>
                          <p>Una línea de alto desempeño y confiabilidad para instalaciones con alta demanda de corriente, altas temperaturas o bajo requerimientos de eficiencia de energía.</p>
                        </div>
                      </div>
                      
                      <div className="electroducto-content">
                        {/* Especificaciones movidas arriba de las imágenes */}
                        <div className="electroducto-specs">
                          <span className="electroducto-spec">630 – 6300 A</span>
                          <span className="electroducto-spec">Mayor eficiencia (bajas pérdidas por efecto Joule)</span>
                          <span className="electroducto-spec">Aislamiento clase B(130°C) o clase F(155°C)</span>
                          <span className="electroducto-spec">Autoextinguible Grado V1 (UL94)</span>
                          <span className="electroducto-spec">Icw = 36 – 150 kA</span>
                        </div>
                        
                        <div className="electroducto-images">
                          <div className="electroducto-main-image">
                            <img src="ducto.jpg" alt="Electroducto XCP-HP" />
                          </div>
                          <div className="electroducto-additional-image">
                            <img src="xcp.png" alt="Detalle Electroducto XCP-HP" />
                          </div>
                        </div>
                        
                        <div className="electroducto-brand">
                          <img src="bticino.jpg" alt="Bticino" />
                        </div>
                      </div>
                    </div>
                  
                    {/* XCP-S */}
                    <div className="electroducto-card">
                      <div className="electroducto-header">
                        <h4 className="electroducto-name">
                          Electroducto alta potencia <span className="electroducto-highlight-orange">XCP-S</span>
                        </h4>
                        
                        {/* Descripción movida después del título */}
                        <div className="electroducto-description">
                          <p>XCP-S optimiza su diseño ofreciendo grandes capacidades de corriente en condiciones de espacio reducido. La sección de las barras internas permite ofrecer un tamaño más compacto con un peso más ligero.</p>
                          <p>Los materiales conductores y aislantes le otorgan un alto desempeño y confiabilidad para distribuir la energía en Industria, Edificios, Hospitales, Centros comerciales, Data Centers, etc.</p>
                        </div>
                      </div>
                      
                      <div className="electroducto-content">
                        {/* Especificaciones movidas arriba de las imágenes */}
                        <div className="electroducto-specs">
                          <span className="electroducto-spec">630 – 6300 A</span>
                          <span className="electroducto-spec">Compacta y ligera</span>
                          <span className="electroducto-spec">Aislamiento clase B(130°C) o clase F(155°C)</span>
                          <span className="electroducto-spec">Autoextinguible Grado V1 (UL94)</span>
                          <span className="electroducto-spec">Icw = 25 – 120 kA</span>
                        </div>
                        
                        <div className="electroducto-images">
                          <div className="electroducto-main-image">
                            <img src="ducto.jpg" alt="Electroducto XCP-S" />
                          </div>
                          <div className="electroducto-additional-image">
                            <img src="xcps.png" alt="Detalle Electroducto XCP-S" />
                          </div>
                        </div>
                        
                        <div className="electroducto-brand">
                          <img src="bticino.jpg" alt="Bticino" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Configuración de barras */}
                  <div className="configuracion-barras">
                    <h4 className="config-title">Configuración de barras XCP-HP y XCP-S</h4>
                    <div className="config-content">
                      <div className="config-item">
                        <div className="config-image">
                          <img src="barras.png" alt="Configuración barras" />
                        </div>
                      </div>
                    </div>
                  </div>

                  
                  {/* Accesorios compatibles */}
                  <div className="accesorios-compatibles">
                    <h4 className="accesorios-title">Accesorios compatibles XCP-S y XCP-HP</h4>
                    <div className="accesorios-content">
                      <div className="accesorios-column">
                        <h5 className="accesorios-subtitle">Cajas de derivación</h5>
                        <div className="accesorio-item">
                          <div className="accesorio-image">
                            <img src="fibra.jpg" alt="Caja de fibra de vidrio" />
                          </div>
                          <div className="accesorio-info">
                            <h6>Fibra de vidrio</h6>
                            <p>Acepta interruptores de 63 hasta 250 A.</p>
                          </div>
                        </div>
                        <div className="accesorio-item">
                          <div className="accesorio-image">
                            <img src="lamina.jpg" alt="Caja de lámina" />
                          </div>
                          <div className="accesorio-info">
                            <h6>Lámina</h6>
                            <p>Acepta interruptores de 63 hasta 1250 A.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accesorios-column">
                        <h5 className="accesorios-subtitle">Amplia gama de accesorios</h5>
                        <div className="accesorios-grid">
                          <img src="accesorios.png" alt="Accesorios compatibles" className="accesorios-grid-image" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Electroductos de baja potencia */}
                <div className="electroductos-seccion">
                  <div className="electroductos-grid">
                    <div className="electroducto-card">
                      <div className="electroducto-header">
                        <h4 className="electroducto-name">
                          Electroducto media potencia <span className="electroducto-highlight-green">XCM</span>
                        </h4>
                        <div className="electroducto-description">
                          <p>XCM es una gama con alta funcionalidad, facilidad de instalación y notable robustez, por lo que es ampliamente utilizada para la distribución de energía en Industria, Data Centers, Edificios de servicios (bancos, oficinas, etc). </p>
                        </div>
                      </div>

                      <div className="electroducto-content">
                        <div className="electroducto-specs">
                          <span className="electroducto-spec">160 – 1000 A</span>
                          <span className="electroducto-spec">Notable flexibilidad y robustez</span>
                          <span className="electroducto-spec">Autoextinguible Grado V0 , V2(UL94)</span>
                          <span className="electroducto-spec">Icw = 15– 36 kA (*)</span>
                        </div>

                        <div className="electroducto-images">
                          <div className="electroducto-main-image">
                            <img src="ducto2.jpg" alt="Electroducto XCM" />
                          </div>
                          <div className="electroducto-additional-image">
                            <img src="xcm.png" alt="Detalle Electroducto XCM" />
                          </div>
                        </div>

                        <div className="electroducto-brand">
                          <img src="bticino.jpg" alt="Bticino" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Accesorios compatibles XCM */}
                  <div className="accesorios-compatibles">
                    <h4 className="accesorios-title">Accesorios compatibles XCM</h4>
                    <div className="accesorios-content">
                      <div className="accesorios-column">
                        <div className="accesorio-item">
                          <div className="accesorio-image">
                            <img src="tramo.jpg" alt="Tramos rectos" />
                          </div>
                          <div className="accesorio-info">
                            <h6>Tramos rectos</h6>
                            <p>Con ventanas de derivación espaciadas a 1 m, fabricados en acero zincado (disponible en aluminio o acero galvanizado bajo especificación).</p>
                          </div>
                        </div>
                        <div className="accesorio-item">
                          <div className="accesorio-image">
                            <img src="alimentadora.jpg" alt="Caja alimentadora" />
                          </div>
                          <div className="accesorio-info">
                            <h6>Caja alimentadora</h6>
                            <p>Permite alimentar los circuitos de electroducto XCM a través de un cable o bien directamente de un tablero de distribución.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accesorios-column">
                        <div className="accesorio-item">
                          <div className="accesorio-image">
                            <img src="angulos.jpg" alt="Ángulos" />
                          </div>
                          <div className="accesorio-info">
                            <h6>Ángulos</h6>
                            <p>Utilizados para realizar cualquier cambio de dirección, cuentan con monoblock de unión preensamblado en fábrica.</p>
                          </div>
                        </div>
                        <div className="accesorio-item">
                          <div className="accesorio-image">
                            <img src="soporteria.jpg" alt="Soportería" />
                          </div>
                          <div className="accesorio-info">
                            <h6>Soportería</h6>
                            <p>Para montaje de la línea en posición horizontal o vertical.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="accesorios-content" style={{ marginTop: "1.5rem" }}>
                      <div className="accesorios-column">
                        <div className="accesorio-item">
                          <div className="accesorio-image">
                            <img src="caja1.png" alt="Cajas de derivación enchufables" />
                          </div>
                          <div className="accesorio-info">
                            <h6>Cajas de derivación enchufables</h6>
                            <p>Para interruptores de 32 a 630 A.</p>
                          </div>
                        </div>
                      </div>
                      <div className="accesorios-column">
                        <div className="accesorio-item">
                          <div className="accesorio-image">
                            <img src="caja2.jpg" alt="Cajas de derivación atornillables" />
                          </div>
                          <div className="accesorio-info">
                            <h6>Cajas de derivación atornillables</h6>
                            <p>Para interruptores de 630 a 1000 A, su conexión eléctrica se realiza a través de monoblock.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="electroducto-brand" style={{ marginTop: "1rem", display: "flex", justifyContent: "flex-end" }}>
                      <img src="bticino.jpg" alt="Bticino" style={{ maxWidth: "120px" }} />
                    </div>
                  </div>

              {/* Servicios de ingeniería: Trazado, BOM, Cotizaciones */}
                <div className="electroductos-seccion">
                  <div className="electroductos-grid">
                    <div className="electroducto-card">
                      <div className="servicios-ingenieria-grid">
                        
                        {/* Columna de texto */}
                        <div className="servicios-ingenieria-texto">
                          <p className="servicio-linea">Trazado de trayectorias</p>
                          <p className="servicio-linea">Volumetría de materiales (BOM)</p>
                          <p className="servicio-linea">Cotizaciones</p>
                          <a
                            href="https://mail.google.com/mail/?view=cm&fs=1&to=cotizaciones@semservicios.com.mx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="servicio-correo"
                          >
                            <FaEnvelope size={22} />
                            cotizaciones@semservicios.com.mx
                          </a>
                        </div>

                        {/* Columna de imágenes */}
                        <div className="servicios-ingenieria-imagenes">
                          <div className="servicio-img-stack">
                            <img src="trazado.png" alt="Trazado de trayectorias" className="servicio-img" />
                            <img src="bom.png" alt="Volumetría de materiales" className="servicio-img" />
                          </div>
                          <img src="cotizaciones.png" alt="Cotizaciones" className="servicio-img-wide" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


{/* Tableros de distribución NBAR 4000 */}
<div className="electroductos-seccion" style={{ marginTop: '2rem' }}>
<div className="electroductos-grid">
  <div className="electroducto-card">
    <div className="electroducto-header">
      <h4 className="electroducto-name">
        Tableros de distribución <span className="electroducto-highlight-blue">NBAR 4000</span>
      </h4>
      <div className="electroducto-description">
        <p>
          NBAR 4000 es una línea de tableros de distribución autosoportados tipo NEMA 1 con barras principales de cobre de 1250 a 4000 A, Icc = 65kA. El interruptor principal (MEGABREAK) está disponible con protecciones LI, LSI, LSIG. Los derivados (MEGATIKER) son enchufables con disparo termomagnético o electrónico.
        </p>
      </div>
    </div>

    <div className="electroducto-content electroducto-nbar-layout">
      <div className="electroducto-nbar-image">
        <img src="tablero1.jpg" alt="Tablero NBAR 4000" className="electroducto-image" />
      </div>

<div className="electroducto-specs-container nbar-grid-specs">
  {/* Columna izquierda */}
  <div className="electroducto-specs-column">
    <div className="electroducto-specs-group">
      <h5 className="electroducto-specs-title">Acometida</h5>
      <ul className="electroducto-specs-list">
        <li>Interruptor principal de 800-4000 A, relé (LI, LSI, LSIG), Icu=65kA</li>
        <li>Zapatas principales: 1250-4000 A, Icw=65kA</li>
      </ul>
    </div>

    <div className="electroducto-specs-group">
      <h5 className="electroducto-specs-title">Montaje</h5>
      <ul className="electroducto-specs-list">
        <li>Autosoportado</li>
      </ul>
    </div>

    <div className="electroducto-specs-group">
      <h5 className="electroducto-specs-title">Gabinete tipo NEMA 1</h5>
      <ul className="electroducto-specs-list">
        <li>Acero rolado en frío, color RAL-7035</li>
      </ul>
    </div>
  </div>

  {/* Columna derecha */}
  <div className="electroducto-specs-column">
    <div className="electroducto-specs-group">
      <h5 className="electroducto-specs-title">Columnas acoplables entre sí</h5>
      <ul className="electroducto-specs-list">
        <li>Acometida</li>
        <li>Acoplamiento</li>
        <li>Transferencia</li>
        <li>Distribución</li>
        <li>Alimentadores</li>
      </ul>
    </div>

    <div className="electroducto-specs-group">
      <h5 className="electroducto-specs-title">Equipo de medición (opcional)</h5>
      <ul className="electroducto-specs-list">
        <li>Analizador de redes (V, I, FP, F, KVA, KW, THDI, THDV)</li>
        <li>RS485 Modbus RTU, Ethernet</li>
      </ul>
    </div>
  </div>
</div>

    </div>

    <div className="electroducto-brand">
      <img src="bticino.jpg" alt="Bticino" />
    </div>
  </div>
</div>

  <div className="accesorios-compatibles" style={{ marginTop: '2rem' }}>
    <h4 className="accesorios-title">Bus vertical para conexión rápida</h4>
    <div className="accesorios-content">
      <div className="accesorios-column">
            <img src="nbar.png" alt="Bus vertical conexión rápida" className="nbar-img-custom" />
      </div>
      <div className="accesorios-column">
            <img src="interruptores.png" alt="Interruptores derivados enchufables" className="interruptores-img-custom" />
          <div className="accesorio-info">
            <h6>Interruptores derivados enchufables</h6>
            <p>- Caja moldeada (MCCB) 16-1000 A</p>
            <p>- Barras estañadas Icw= 50 kA (1s)</p>
          </div>

      </div>
    </div>
  </div>
</div>

{/* Transformadores de potencia encapsulados */}
<div className="transformadores-seccion" style={{ marginTop: "2rem" }}>
  <h2 className="transformadores-titulo">Transformadores de potencia encapsulados</h2>
  
  {/* Primera sección - TPE */}
  <div className="transformadores-card tpe-card">
    <div className="transformadores-content">
      <div className="transformadores-image-container">
        <img src="tpe.jpg" alt="Transformador de potencia encapsulado" className="transformadores-image" />
      </div>
      <div className="transformadores-text">
        <p>Los transformadores de potencia encapsulados en resina CRT (Cast Resin Transformers) son ampliamente utilizados a nivel mundial para diversas aplicaciones. Durante la última década, en México se cuenta con una tendencia al alza en cuanto a su empleo en sistemas de distribución eléctrica para edificios, hospitales, centros comerciales, escuelas e industria en general..</p>
      </div>
    </div>
  </div>

  {/* Segunda sección - Green T */}
  <div className="transformadores-card greent-card">
    <div className="transformadores-header">
      <h3 className="greent-titulo">Transformadores de potencia Green T</h3>
    </div>
    
    <div className="transformadores-content">
      <div className="transformadores-image-container">
        <img src="greent.jpg" alt="Transformador Green T" className="transformadores-image" />
      </div>
      <div className="transformadores-text">
        <p><strong> Green T</strong> es una línea de transformadores encapsulados en resina los cuales se diseñan (bajo requerimiento del cliente) y fabrican en Italia. El diseño, la alta calidad de sus componentes, los estrictos controles en la fabricación, así como el cumplimiento con los estándares internacionales, hacen de <strong>Green T</strong> un aliado cuando se busca confiabilidad, seguridad, eficiencia con menor tiempo en el retorno de inversión.</p>
      </div>
    </div>

    <div className="gama-section">
      <h4 className="gama-titulo">Gama</h4>
      <div className="gama-specs">
        <div className="gama-column">
          <ul className="gama-list">
            <li><strong>Potencia nominal :</strong> 300 - 2500 MVA</li>
            <li><strong>Tensión en el primario:</strong> Hasta 36 kV</li>
            <li><strong>Tensión en el secundario:</strong> a solicitud del cliente.</li>
            <li><strong>Taps en MT:</strong> ± 2 x 2.5%</li>
            <li><strong>Conexión:</strong> Dyn11</li>
            <li><strong>Z%</strong> = 4 – 6 %</li>
          </ul>
        </div>
        <div className="gama-column">
          <div className="clase-aislamiento">
            <div className="clase-item">
              <h5><span className="green-highlight">Clase de aislamiento 17.5 kV</span></h5>
              <p>Nivel básico de aislamiento / Primario: BIL a 75 o 95 kV.</p>
              <p>Clase de aislamiento / Secundario: 1.1 kV.</p>
            </div>
            <div className="clase-item">
              <h5><span className="green-highlight">Clase de aislamiento 24 kV</span></h5>
              <p>Nivel básico de aislamiento / Primario: BIL a 95 o 125 kV.</p>
              <p>Clase de aislamiento / Secundario: 1.1 kV.</p>
            </div>
            <div className="clase-item">
              <h5><span className="green-highlight">Clase de aislamiento 36 kV</span></h5>
              <p>Nivel básico de aislamiento / Primario: BIL a 170 kV.</p>
              <p>Clase de aislamiento / Secundario: 1.1 kV.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="transformadores-brand">
      <img src="bticino.jpg" alt="Bticino" />
    </div>
  </div>

  {/* Tercera sección - Confiabilidad */}
  <div className="transformadores-card confiabilidad-card">
    <div className="transformadores-header">
      <h3 className="confiabilidad-titulo">Confiabilidad</h3>
    </div>

    <div className="confiabilidad-section">
      <div className="confiabilidad-item">
        <h4 className="confiabilidad-subtitle">✓ Bajo nivel de descargas parciales</h4>
        <p>Las descargas parciales son pequeñas roturas dieléctricas que se localizan en alguna parte del aislamiento eléctrico (sólido o líquido) entre las espiras de un transformador, este fenómeno provoca el deterioro progresivo de los aislamientos. Las descargas parciales ocupan un alto porcentaje de las fallas en transformadores y son causa de su <strong>final de vida técnico</strong>.</p>
        <div className="highlight-box">
          <p>Las pruebas de descargas parciales entre espiras MT de Green T son de menores a 5pC (la norma de producto indica máximo 10pC)</p>
        </div>
      </div>

      <div className="confiabilidad-item">
        <h4 className="confiabilidad-subtitle">✓ Tolerancia a Condiciones ambientales y climáticas</h4>
        
        <div className="tolerancia-grid">
          <div className="tolerancia-item">
            <div className="tolerancia-image-container">
              <img src="ambientales.png" alt="Condiciones ambientales" className="tolerancia-image" />
              <div className="tolerancia-overlay">
              </div>
            </div>
            <div className="highlight-box">
              <div className="tolerancia-text">
                <p><strong>E2</strong> : Condensación consistente y/o contaminación importante, humedad relativa 93%.</p>
                <p><strong>E3</strong> : Condensación casi total y/o contaminación importante, humedad relativa 95%.</p>
                <p><strong>E4</strong> : Condiciones más severas.</p>
              </div>
            </div>
          </div>

          <div className="tolerancia-item">
            <div className="tolerancia-image-container">
              <img src="climaticas.png" alt="Condiciones climáticas" className="tolerancia-image" />
              <div className="tolerancia-overlay">
              </div>
            </div>
            <div className="highlight-box">
              <div className="tolerancia-text">
                <p><strong>C2</strong> : Posibilidad de operación, transporte y almacenamiento a -25°C.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

<div className="transformadores-card impactos-card">
  <div className="transformadores-header">
    <h3 className="impactos-titulo">Impactos económicos</h3>
  </div>

  <div className="impactos-intro">
    <p>Los transformadores de potencia se diseñan para alcanzar una vida útil promedio entre los 20-35 años y un mínimo de <strong>25 años</strong> a temperaturas nominales de operación, aunque en la práctica algunos transformadores podrán presentar fallos en un plazo más corto, algunos otros con mantenimiento adecuado podrían sobrepasar esos niveles de vida útil.</p>
    
    <p>El costo de operación de un transformador depende de la relación entre valor de sus pérdidas en vacío <strong>Po</strong> (sin carga) y las pérdidas con carga <strong>Pk</strong>.</p>
    
    <div className="formula-wrapper">
      <p className="formula-label">Costo total durante la vida de un transformador de potencia = </p>
      <span className="formula-item acquisition">+ 20% Costo de adquisición</span>
      <span className="formula-item operation">+ 80% Costos de operación</span>
    </div>
  </div>

  <div className="menores-costos-section">
    <h4 className="menores-costos-titulo">Menores Costos de Operación</h4>
    
    <div className="costos-item">
      <h5 className="costos-subtitle">✓ Bajo nivel de pérdidas</h5>
      
      <div className="costos-content">
        <div className="costos-text">
          <p>El diseño y los materiales del núcleo de Green T permiten reducir las pérdidas por <strong>Corrientes parásitas</strong>, pérdidas por <strong>Histéresis</strong>, pérdidas de <strong>Flujo magnético</strong> y los efectos por <strong>Magnetostricción</strong> lo que se traducirá en <strong>importantes ahorros económicos a través de la vida útil del transformador</strong>.</p>
        </div>
        <div className="costos-image">
          <img src="impactos.jpg" alt="Transformador de potencia" className="impactos-image" />
        </div>
      </div>
    </div>

    <div className="costos-item">
      <h5 className="costos-subtitle">✓ Bajo mantenimiento requerido</h5>
      
      <div className="mantenimiento-content">
        <p>Ante la ausencia de aceites aislantes-refrigerantes, el mantenimiento preventivo de los transformadores encapsulados en resina solo requieren de inspección periódica:</p>
        
        <ul className="mantenimiento-list">
          <li>Limpieza de polvo, grasa o partículas extrañas en los devanados y/suciedad (anual).</li>
          <li>Verificación de centralita y sondas de control de temperatura (semestral)</li>
          <li>Apriete de tornillería en conexiones eléctricas y de fijación al suelo (anual).</li>
        </ul>
      </div>
    </div>

    <div className="costos-item">
      <h5 className="instalacion-titulo">Menores Costos de Instalación</h5>
      <h6 className="costos-subtitle">✓ Bajo costo de instalaciones requeridas</h6>
      
      <div className="instalacion-content">
        <ul className="instalacion-list">
          <li>No se requiere de fosas contenedoras de aceite, rejillas de apagado o barreras de separación resistentes al fuego.</li>
          <li>Lo anterior permite instalarlo dentro de los edificios y más cercanos a las cargas, lo que implica una reducción en el costo de conexión y pérdidas de la línea de alimentación.</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<div className="transformadores-card seguridad-card">
  <div className="transformadores-header">
    <h3 className="seguridad-titulo">Seguridad</h3>
  </div>

  <div className="seguridad-section">
    <div className="seguridad-item">
      <h4 className="seguridad-subtitle">✓ Materiales autoextinguibles</h4>
      
      <div className="seguridad-content">
        <div className="seguridad-text">
          <p>El grado de inflamabilidad F1 se refiere a una clasificación de materiales en función de su resistencia al fuego, indicando que el material tiene baja propagación de llama y baja emisión de humos tóxicos. El fuego en el transformador se extinguirá dentro de los límites de tiempo preestablecidos.</p>
        </div>
        <div className="seguridad-image">
          <img src="fuego.png" alt="Resistencia al fuego F1" className="fuego-image" />
        </div>
      </div>
    </div>
  </div>
</div>
</div>
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