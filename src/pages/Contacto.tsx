import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {
  // Estado para controlar los campos del formulario
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: ''
  });

  const [enviando, setEnviando] = useState(false);
  const [mensajeEstado, setMensajeEstado] = useState<{ tipo: 'éxito' | 'error'; texto: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);
    setMensajeEstado(null);

    // Obtener variables desde el archivo .env
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Enviamos el objeto formData como template_params
    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(
        () => {
          setEnviando(false);
          setMensajeEstado({
            tipo: 'éxito',
            texto: `¡Gracias ${formData.nombre}! Tu mensaje ha sido enviado con éxito.`
          });
          // Limpiar formulario
          setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
        },
        (error) => {
          setEnviando(false);
          console.error('Error al enviar email con EmailJS:', error);
          setMensajeEstado({
            tipo: 'error',
            texto: 'Hubo un error al enviar tu consulta. Por favor intenta por WhatsApp o Email directo.'
          });
        }
      );
  };

  return (
    <section className="container py-5 my-5">
      {/* Título de sección */}
      <div className="text-center my-5">
        <p className="text-muted">¿Tenés alguna consulta técnica o necesitás un presupuesto? Escribinos.</p>
      </div>

      <div className="row g-5 align-items-stretch justify-content-between">
        
        {/* COLUMNA IZQUIERDA: Formulario de Contacto */}
        <div className="col-12 col-lg-7 text-start">
          <form 
            onSubmit={handleSubmit} 
            className="h-100 p-4 p-md-5 border border-secondary rounded-4 shadow-lg blur-6"
          >
            <h4 className="mb-4 text-black fw-semibold">Enviar un mensaje</h4>
            
            {/* Alerta de estado (Éxito / Error) */}
            {mensajeEstado && (
              <div className={`alert ${mensajeEstado.tipo === 'éxito' ? 'alert-success' : 'alert-danger'} mb-4`} role="alert">
                {mensajeEstado.texto}
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="nombre" className="form-label text-secondary">Nombre / Empresa</label>
              <input
                required
                type="text"
                className="form-control text-black border-secondary"
                id="nombre"
                name="nombre"
                placeholder="Nombre o razón social"
                value={formData.nombre}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="email" className="form-label text-secondary">Correo electrónico</label>
              <input
                required
                type="email"
                className="form-control text-black border-secondary"
                id="email"
                name="email"
                placeholder="nombre@ejemplo.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="asunto" className="form-label text-secondary">Asunto</label>
              <input
                required
                type="text"
                className="form-control text-black border-secondary"
                id="asunto"
                name="asunto"
                placeholder="Ej: Presupuesto Servicio Técnico"
                value={formData.asunto}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label htmlFor="mensaje" className="form-label text-secondary">Mensaje</label>
              <textarea
                required
                className="form-control text-black border-secondary"
                id="mensaje"
                name="mensaje"
                rows={4}
                placeholder="Escribí los detalles de tu consulta o el modelo del equipo..."
                value={formData.mensaje} // Corregido el bind del value aquí
                onChange={handleChange}
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary px-4 py-2 fw-semibold"
              disabled={enviando}
            >
              {enviando ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>

        {/* COLUMNA DERECHA: Información de Contacto Directo */}
        <div className="col-12 col-lg-5 text-start d-flex flex-column justify-content-between">
          <div className="p-4 p-md-5 border border-secondary border-opacity-50 rounded-4 h-100 bg-dark bg-opacity-10 d-flex flex-column justify-content-center">
            <h4 className="mb-4 text-black fw-semibold">Atención al Cliente</h4>
            
            <div className="mb-4">
              <h6 className="text-primary fw-bold text-uppercase mb-1" style={{ fontSize: '0.85rem' }}>Nuestro Taller</h6>
              <p className="text-black mb-0">Calle Obispo Clara 219, San Martin</p>
              <p className="text-muted small">Córdoba, Argentina</p>
            </div>

            <div className="mb-4">
              <h6 className="text-primary fw-bold text-uppercase mb-1" style={{ fontSize: '0.85rem' }}>Teléfonos de Contacto</h6>
              <p className="mb-1">
                <a href="tel:+5493515228856" className="text-black text-decoration-none hover-link">
                  📞 + 54 351 5228856
                </a>
              </p>
              <p className="mb-0">
                <a href="https://api.whatsapp.com/send?phone=543515228856&text=Hola,%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios." target="_blank" rel="noopener noreferrer" className="text-success text-decoration-none fw-semibold">
                  💬 Escribinos por WhatsApp
                </a>
              </p>
            </div>

            <div className="mb-4">
              <h6 className="text-primary fw-bold text-uppercase mb-1" style={{ fontSize: '0.85rem' }}>Consultas Generales</h6>
              <p className="mb-0">
                <a href="mailto:info@attoelectronica.com.ar" className="text-black text-decoration-none hover-link">
                  ✉️ info@attoelectronica.com.ar
                </a>
              </p>
            </div>

            <hr className="border-secondary my-3" />

            <div>
              <h6 className="text-primary fw-bold text-uppercase mb-1" style={{ fontSize: '0.85rem' }}>Horarios de Recepción</h6>
              <p className="text-black mb-1">Lunes a Viernes: 8:30 hs a 14:30 hs</p>
              <p className="text-muted small mb-0">Fines de semana y feriados cerrado.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};