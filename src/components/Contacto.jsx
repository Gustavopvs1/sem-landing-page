// src/components/Contact.jsx
import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../styles/components/Contacto.css';

const Contacto = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  const whatsappNumber = "524423928667";
  const whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);

  const location = [20.999124339209285, -100.38845418793261];

  const redIcon = new L.Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
  });

  return (
    <section className="section contact" ref={ref}>
      <motion.div
        className="contact-container"
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
        <h2 className="section-title">Contacto</h2>

        <div className="contact-content-modified">
          <div className="contact-info-full">
            <div className="logo-container">
              <img src="/sem4.png" alt="SEM Logo" className="sem-logo" />
            </div>

            <div className="contact-details">
              <div className="contact-person-wrapper">
                <div className="contact-person">
                  <a 
                    href={whatsappUrl} 
                    className="whatsapp-container"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat en WhatsApp"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="white" 
                      className="whatsapp-icon"
                    >
                      <path 
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.652a11.882 11.882 0 005.71 1.447h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" 
                      />
                    </svg>
                  </a>
                  <div className="person-info">
                    <p className="person-name">Ing. Gustavo Rivera</p>
                    <p className="person-phone">442.392.86.67</p>
                  </div>
                </div>
              </div>

              <div className="partner-logo-container">
                <a
                  href="https://pqbarcon.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pqbarcon-link"
                >
                  <img src="/pq2.png" alt="Logo PQBARCON" className="pqbarcon-logo" />
                </a>
              </div>

              {/* Leaflet map */}
              <div className="map-container">
                <MapContainer
                  center={location}
                  zoom={8}
                  scrollWheelZoom={false}
                  style={{ height: "250px", width: "100%", borderRadius: "8px" }}
                >
                  <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                  <Marker position={location} icon={redIcon}>
                    <Popup>
                      <b>SEM Empresarial</b><br />
                      Melchor Ocampo #20, Col. Centro, San José Iturbide
                    </Popup>
                  </Marker>
                </MapContainer>
              </div>

              <div className="privacy-notice">
                <p>Aviso de privacidad: Sus datos personales están protegidos y no serán compartidos con terceros.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacto;
