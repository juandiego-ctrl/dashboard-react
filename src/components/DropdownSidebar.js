import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import './DropdownSidebar.css'; // Este archivo lo crearemos después

const DropdownSidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <>
      <button className="btn btn-outline-primary" onClick={toggleSidebar}>
        ☰ Menú
      </button>

      <div className={`custom-sidebar ${showSidebar ? 'show' : ''}`}>
        <button className="btn btn-close mt-3 ms-3" onClick={toggleSidebar}></button>
        <ul className="list-unstyled p-4">
          <li className="mb-3">
            <NavLink to="/" className="text-decoration-none" onClick={toggleSidebar}>
              🏠 Inicio
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/sales" className="text-decoration-none" onClick={toggleSidebar}>
              🛒 Ventas
            </NavLink>
          </li>
          <li className="mb-3">
            <NavLink to="/clients" className="text-decoration-none" onClick={toggleSidebar}>
              👥 Clientes
            </NavLink>
          </li>
        </ul>
      </div>

      {showSidebar && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default DropdownSidebar;


