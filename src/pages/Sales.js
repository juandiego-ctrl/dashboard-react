import { useState } from 'react';
import './Sales.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    documento: '',
    nombre: '',
    telefono: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos a tu servidor o base de datos
    console.log('Datos enviados:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="documento"
        value={formData.documento}
        onChange={handleChange}
        placeholder="Número de documento"
        required
      />
      <input
        type="text"
        name="nombre"
        value={formData.nombre}
        onChange={handleChange}
        placeholder="Nombre completo"
        required
      />
      <input
        type="tel"
        name="telefono"
        value={formData.telefono}
        onChange={handleChange}
        placeholder="Teléfono de contacto"
        required
      />
      <textarea
        name="mensaje"
        value={formData.mensaje}
        onChange={handleChange}
        placeholder="¿En qué te podemos ayudar?"
        required
      />
      <button type="submit">Enviar solicitud</button>
    </form>
  );
};

export default ContactForm;
