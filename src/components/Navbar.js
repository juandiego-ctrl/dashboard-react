import DropdownSidebar from './DropdownSidebar';

const Navbar = () => {
  return (
    <nav style={{ backgroundColor: '#001f3f', color: '#fff' }} className="navbar">
      <div className="container-fluid d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <span className="navbar-brand mb-0 h1 me-3" style={{ color: '#fff', letterSpacing: '2px', fontWeight: '700' }}>
            ZONA J
          </span>
          <DropdownSidebar />
        </div>
        <form className="d-flex" role="search">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar"
            aria-label="Buscar"
            style={{
              borderColor: '#66b2ff',
              backgroundColor: '#003366',
              color: '#fff',
            }}
          />
          <button
            className="btn"
            type="submit"
            style={{
              backgroundColor: '#66b2ff',
              color: '#001f3f',
              border: 'none',
            }}
          >
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
