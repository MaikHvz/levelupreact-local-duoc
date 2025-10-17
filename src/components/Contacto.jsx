import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

// 1. Importación del archivo CSS con los estilos oscuros/futuristas
import '../styles/contacto.css';  

const ContactForm = () => {
  // Estado para manejar la validación y los datos del formulario
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    
    // Si la validación de Bootstrap falla
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    
    setValidated(true);

    if (form.checkValidity() === true) {
      console.log('Datos a enviar:', formData);
      // Aquí iría tu lógica de envío de datos a un API o servicio.
      alert('Formulario enviado con éxito!');
      // Opcional: limpiar el formulario
      // setFormData({ nombre: '', correo: '', mensaje: '' });
      // setValidated(false);
    }
  };

  return (
    // 2. Contenedor principal para el fondo (clase CSS: contact-page-container)
    <div className="contact-page-container">
        
        {/* 3. Contenedor para los efectos visuales (clase CSS: bg-effects) */}
        <div className="bg-effects">
            <div className="effect-circle effect-1"></div>
            <div className="effect-circle effect-2"></div>
            <div className="effect-circle effect-3"></div>
        </div>

        {/* El contenedor de Bootstrap ayuda a limitar el ancho y centrar */}
        <Container className="my-5 justify-content-center d-flex">
            {/* El div de alerta que se mantenía del HTML original */}
            <div id="alerta" className="mb-3">
              {/* Aquí podrías mostrar un Alert de React Bootstrap */}
            </div>

            {/* 4. Formulario con la clase CSS para el estilo tipo "card" oscura */}
            <Form 
              noValidate 
              validated={validated} 
              onSubmit={handleSubmit} 
              className="contact-form-card" 
            >
              <h1 className="text-center mb-4">Contáctanos</h1>
              
              {/* Campo de Nombre */}
              <Form.Group className="mb-3" controlId="formNombre">
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  minLength={3}
                />
                <Form.Control.Feedback type="invalid">
                  El nombre debe tener al menos 3 caracteres.
                </Form.Control.Feedback>
              </Form.Group>

              {/* Campo de Correo Electrónico */}
              <Form.Group className="mb-3" controlId="formCorreo">
                <Form.Label>Correo electrónico</Form.Label>
                <Form.Control
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                  placeholder="Tu@email.com"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Ingrese un correo válido (ej: nombre@dominio.com).
                </Form.Control.Feedback>
              </Form.Group>

              {/* Campo de Mensaje (TextArea) */}
              <Form.Group className="mb-3" controlId="formMensaje">
                <Form.Label>Mensaje</Form.Label>
                <Form.Control
                  as="textarea"
                  name="mensaje"
                  rows={5}
                  value={formData.mensaje}
                  onChange={handleChange}
                  placeholder="Escribe tu consulta aquí..."
                  minLength={10}
                  required // Se añade "required" para la validación de Bootstrap
                />
                <Form.Control.Feedback type="invalid">
                  El mensaje debe tener al menos 10 caracteres.
                </Form.Control.Feedback>
              </Form.Group>
              
              {/* Botón de Enviar */}
              <Button 
                variant="primary" 
                type="submit" 
                className="w-100 submit-button"
              >
                Enviar
              </Button>
            </Form>
        </Container>
    </div>
  );
};

export default ContactForm; 