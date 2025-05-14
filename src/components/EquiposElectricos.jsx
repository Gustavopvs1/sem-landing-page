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
  const [selectedAdicional, setSelectedAdicional] = useState(null);
  const [showTooltip, setShowTooltip] = useState(false);
  
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
      beneficios: 'Alcance mayor productividad, reduzca tiempos muertos de producción, extienda la vida útil de sus equipos y componentes, reduzca el costo de mantenimiento y ahorre energía con Merus®A2.',
      image: 'merus2.png',
      featured: true
    },
    // Espacio para futuros productos
  ];
  
  // Bancos de capacitores
  const bancosCapacitores = [
    {
      id: 'banco-fijo',
      name: 'Banco de capacitores fijo con reactores de rechazo',
      image: 'imagen1.png',
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
      image: 'imagen2.png',
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
      image: 'imagen3.png',
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
    },
    {
      id: 'hpq',
      name: 'HPQ',
      image: 'hpq.jpg',
      info: [
        'HPQ es un compensador híbrido de calidad de la energía.',
        'Esta solución única y confiable garantiza:',
        'Instantánea corrección del factor de potencia',
        'Mitigación de corrientes armónicas.',
        'Corrección de desequilibrios.',
        'HPQ Dispone de dos modos de operación:',
        'Modo corrección de factor de potencia (FP) : es el modo tradicional en donde Las mediciones se realizan en el secundario del transformador y el equipo se configura para múltiples cargas. La velocidad de conmutación de los condensadores es <1s.',
        'Modo Ultra –Fast (UF) : diseñado para cargas individuales que cambian rápidamente, en modo UF, los capacitores se conectan a los tiristores asegurando una conmutación < 20ms. Esta versión se recomienda para aplicaciones de grúas, ascensores y soldadoras.',
        'Sustituye los bancos de capacitores tradicionales y mejora la calidad de la energía.',
        'Ahorre dinero',
        'Minimice el número de interrupciones y fallos.',
        'Alargue la vida útil de sus equipos.',
        'Ahorre espacio con equipos compactos.',
      ]
    }
  ];
  
    // Nuevos productos adicionales
  const productosAdicionales = [
,
    {
      id: 'tableros',
      name: 'Tableros de distribución NBAR 4000',
      image: 'tablero1.jpg',
      info: [
        'NBAR 4000 es una línea de tableros de distribución autosoportados tipo NEMA 1 con barras principales de cobre de 1250 a 4000 A, Icc= 65kA.',
        'El interruptor principal (MEGABREAK) esta disponible para 800, 1000, 1250,1600, 2000, 2500, 3200 y 4000 A con protecciones LI, LSI, LSIG.',
        'Los interruptores derivados en caja moldeada (MEGATIKER) se instalan de forma enchufable y están disponibles en versión termomagnético o con relé de disparo electrónico.',
        'Marca Bticino.',
        'Acometida',
        'Interruptor principal de 800 -4000 A, relé (LI, LSI,LSIG), Icu =65kA, montaje fijo',
        'Zapatas principales :1250 -4000 A, Icw =65kA (Solicitar bornes de acuerdo a cantidad y calibre de cables).',
        'Interruptores derivados enchufables',
        'Interruptor en caja moldeada (MCCB) 16 - 1000 A, relé de disparo termomagnético o electrónico',
        '5 marcas a elegir.',
        'Columnas acoplables tipo NEMA 1',
        'Acometida ',
        'Acometida distribución',
        'Distribución',
        'Transferencia',
        'Acoplamiento',
        'Alimentadores',
        'Montaje',
        'Autosoportado'
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
                      <a 
                        href="/01_Filtros-Activos-de-Armonicas- Merus A2.pdf" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="ficha-link"
                      >
                        Descargar ficha técnica
                      </a>
                    </div>
                    <div className="mas-info-flecha"></div>
                    <div 
                      className="producto-imagen"
                      onMouseEnter={() => setShowTooltip(true)}
                      onMouseLeave={() => setShowTooltip(false)}
                    >
                      <div className="imagen-tooltip-container">
                        <img src={producto.image} alt={producto.name} />
                        
                        {/* Tooltip para mostrar información técnica detallada */}
                        <AnimatePresence>
                          {showTooltip && (
                            <motion.div 
                              className="producto-tooltip"
                              variants={tooltipVariants}
                              initial="hidden"
                              animate="visible"
                              exit="hidden"
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

                            {/* NUEVA SECCIÓN: Productos adicionales */}
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
                      <span className="producto-subtitle">Sistema de distribución de energía</span>
                    </h3>
                    <p className="producto-description">
                      El sistema de Electroducto Zucchini es ampliamente recomendado para realizar la alimentación y derivación de energía eléctrica en diferentes topologías de cargas.
                    </p>
                    <p className="producto-beneficios">
                      Ahorre tiempo, dinero y espacio con el sistema de electroducto. Reduzca riesgos con mayor resistencia al fuego, mejor aislamiento eléctrico y mayor resistencia a eventos sísmicos.
                    </p>
                    <a 
                      href="" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="ficha-link"
                    >
                      Descargar ficha técnica
                    </a>
                  </div>
                  <div className="mas-info-flecha"></div>
                  <div 
                    className="producto-imagen"
                    onMouseEnter={() => setShowTooltip(true)}
                    onMouseLeave={() => setShowTooltip(false)}
                  >
                    <div className="imagen-tooltip-container">
                      <img src="electroducto.jpg" alt="Electroducto Zucchini" />
                      
                      {/* Tooltip para mostrar información técnica detallada */}
                      <AnimatePresence>
                        {showTooltip && (
                          <motion.div 
                            className="producto-tooltip"
                            variants={tooltipVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
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
                              <div className="tooltip-feature-group">
                                <h5 className="tooltip-category">Ahorre espacio</h5>
                                <ul className="tooltip-list">
                                  <li className="tooltip-item">Zucchini distribuye la misma potencia en espacios reducidos, liberando espacio.</li>
                                  <li className="tooltip-item">Reduzca las dimensiones de los tableros alimentadores.</li>
                                </ul>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </div>
              </div>

                <div className="productos-adicionales-grid">
                  {productosAdicionales.map((producto) => (
                    <motion.div
                      key={producto.id}
                      className="producto-adicional-item"
                      variants={cardVariants}
                      initial="initial"
                      whileHover="hover"
                      onClick={() => handleAdicionalClick(producto.id)}
                    >
                      <motion.div 
                        className="producto-adicional-image-container"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <img src={producto.image} alt={producto.name} className="producto-adicional-image" />
                      </motion.div>
                      <h3 className="producto-adicional-name">{producto.name}</h3>
                    </motion.div>
                  ))}
                </div>
                
                {/* Modal para productos adicionales - Por ahora sin información */}
                <AnimatePresence>
                  {selectedAdicional && (
                    <motion.div 
                      className="banco-modal-overlay"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onClick={closeModal}
                    >
                      <motion.div 
                        className={`banco-modal-content ${selectedAdicional === 'tableros' ? 'hpq-modal' : ''}`}
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        <button className="modal-close-btn" onClick={closeModal}>
                          <X size={24} />
                        </button>

                        {productosAdicionales.filter(producto => producto.id === selectedAdicional).map(producto => (
                          <div key={producto.id} className="banco-modal-info">
                            <div className="banco-modal-header">
                              <img 
                                src={producto.id === 'tableros' ? 'nbar.png' : producto.image} 
                                alt={producto.name} 
                                className="banco-modal-image" 
                              />
                              <h3 className="banco-modal-title">{producto.name}</h3>
                            </div>
                            <div className="banco-modal-body">
                              {producto.id === 'tableros' ? (
                                <ul className="banco-info-list">
                                  {producto.info.map((item, index) => {
                                    const isSubtitle = [
                                      'Marca Bticino',
                                      'Acometida',
                                      'Interruptores derivados enchufables',
                                      'Columnas acoplables tipo NEMA 1',
                                      'Montaje'
                                    ].includes(item);

                                    const isFirstParagraphs = index <= 2;

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
                                  })}
                                </ul>
                              ) : (
                                <p className="info-pendiente">Información detallada próximamente.</p>
                              )}
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