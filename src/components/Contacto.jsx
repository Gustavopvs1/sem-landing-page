// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import emailjs from '@emailjs/browser';
import '../styles/components/Contacto.css';

const Contacto = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const controls = useAnimation();
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });
  
  // WhatsApp número con formato internacional (sin + ni espacios)
  const whatsappNumber = "524423928667"; // 52 es el código de México
  const whatsappMessage = "Hola, me gustaría obtener más información sobre sus servicios.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
  
  React.useEffect(() => {
    if (isInView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, isInView]);
  
  // Configurar EmailJS - necesitarás crear una cuenta y conseguir estas claves
  useEffect(() => {
    emailjs.init("TU_PUBLIC_KEY"); // Reemplaza con tu public key de EmailJS
  }, []);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError('');
    
    // Usando EmailJS para enviar el formulario
    emailjs.send(
      "TU_SERVICE_ID", // Reemplaza con tu Service ID de EmailJS
      "TU_TEMPLATE_ID", // Reemplaza con tu Template ID de EmailJS
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Ing. Gustavo Rivera",
        to_email: "correo@destino.com" // Reemplaza con el correo donde quieres recibir los mensajes
      }
    )
    .then(() => {
      setFormSubmitted(true);
      setIsLoading(false);
      // Reset form after submission
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormSubmitted(false);
      }, 5000);
    })
    .catch((error) => {
      console.error("Error al enviar el formulario:", error);
      setFormError('Hubo un error al enviar el formulario. Por favor, intenta nuevamente o contáctanos por WhatsApp.');
      setIsLoading(false);
    });
  };

  // Alternativa: Usar Formspree (más sencillo que EmailJS)
  const handleFormspreeSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setFormError('');
    
    fetch("https://formspree.io/f/TU_FORMSPREE_ID", { // Reemplaza con tu ID de Formspree
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (response.ok) {
        setFormSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setFormSubmitted(false), 5000);
      } else {
        throw new Error("Error en el envío del formulario");
      }
    })
    .catch(() => {
      setFormError('Hubo un error al enviar el formulario. Por favor, intenta nuevamente o contáctanos por WhatsApp.');
    })
    .finally(() => {
      setIsLoading(false);
    });
  };
  
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
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="logo-container">
              <img src="/sem.png" alt="SEM Logo" className="sem-logo" />
            </div>
            
            <div className="contact-details">
              <div className="contact-person">
                <a 
                  href={whatsappUrl} 
                  className="whatsapp-container"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat en WhatsApp"
                >
                  <img 
                    src="https://cdnjs.cloudflare.com/ajax/libs/simple-icons/8.16.0/whatsapp.svg" 
                    alt="WhatsApp" 
                    className="whatsapp-icon" 
                  />
                </a>
                <div className="person-info">
                  <p className="person-name">Ing. Gustavo Rivera</p>
                  <p className="person-phone">442.392.86.67</p>
                </div>
              </div>
              
              <div className="partner-logo-container">
                {/* Espacio para el logo de PQBARCON que agregarás posteriormente */}
                <div className="pqbarcon-placeholder">Logo PQBARCON</div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            {formSubmitted ? (
              <div className="form-success">
                ¡Gracias por tu mensaje! Te contactaremos pronto.
              </div>
            ) : (
              <form 
                className="contact-form" 
                onSubmit={handleFormspreeSubmit} 
                ref={formRef}
              >
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Nombre completo"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Correo"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Mensaje"
                    required
                    rows="6"
                  ></textarea>
                </div>
                
                {formError && <div className="form-error">{formError}</div>}
                
                <button 
                  type="submit" 
                  className="submit-button"
                  disabled={isLoading}
                >
                  {isLoading ? 'Enviando...' : 'Enviar'}
                </button>
              </form>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contacto;