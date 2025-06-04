import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#001f3f', color: '#fff' }} className="mt-auto">
      <div className="container py-5">
        <div className="row">

          {/* Información */}
          <div className="col-lg-4 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: '2px', fontWeight: '700' }}>
              ZONA J
            </h5>
            <p>
              Tu tienda de confianza. Productos de calidad y excelente atención al cliente.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="col-lg-3 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: '2px', fontWeight: '700' }}>
              Enlaces
            </h5>
            <ul className="list-unstyled">
              <li><a href="/" className="footer-link">Inicio</a></li>
              <li><a href="/sales" className="footer-link">Ventas</a></li>
              <li><a href="/clients" className="footer-link">Clientes</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="col-lg-3 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: '2px', fontWeight: '700' }}>
              Contacto
            </h5>
            <ul className="list-unstyled">
              <li>📞 +57 123 456 7890</li>
              <li>✉️ contacto@zonaj.com</li>
              <li>🏢 Calle 123, Ciudad</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-lg-2 mb-4">
            <h5 className="mb-3" style={{ letterSpacing: '2px', fontWeight: '700' }}>
              Newsletter
            </h5>
            <form>
              <input
                type="email"
                className="form-control mb-2"
                placeholder="Tu correo"
                aria-label="Correo electrónico"
                required
              />
              <button type="submit" className="btn btn-primary w-100">
                Suscribirse
              </button>
            </form>
          </div>

        </div>

        {/* Redes sociales */}
        <div className="text-center mt-4">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="mx-2 footer-icon" aria-label="Facebook">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noreferrer" className="mx-2 footer-icon" aria-label="Twitter">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="mx-2 footer-icon" aria-label="Instagram">
            <FaInstagram size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="mx-2 footer-icon" aria-label="LinkedIn">
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>

      {/* Pie de página */}
      <div style={{ backgroundColor: '#001a36' }} className="text-center py-3">
        © {new Date().getFullYear()} ZONA J - Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
