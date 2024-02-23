import React from 'react';
import { NavLink } from 'react-router-dom';
import './global.css';

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary" style={{position: 'relative', zIndex: 4}}>
      <div className="container-fluid d-flex justify-content-center">
        <NavLink className="navbar-brand" to="/">Home</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown1" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Automobile
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown1">
                <li><NavLink className="dropdown-item" to="/manufacturers/create">Create Manufacturer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/manufacturers">List Manufacturers</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models/create">Create Models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/models">List Models</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles/create">Create Automobile</NavLink></li>
                <li><NavLink className="dropdown-item" to="/automobiles">List Automobile</NavLink></li>

              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown2" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Customer
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown2">
                <li><NavLink className="dropdown-item" to="/customer/create">Add a Customer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/customer">Customer</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown3" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Sales
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown3">

                <li><NavLink className="dropdown-item" to="/sale">Sales</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sale/create">Add a Sale</NavLink></li>
                <li><NavLink className="dropdown-item" to="/sale/history">SalePerson History</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salesperson">SalesPeople</NavLink></li>
                <li><NavLink className="dropdown-item" to="/salesperson/create">Add a SalesPerson</NavLink></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown4" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Service
              </NavLink>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown4">
                <li><NavLink className="dropdown-item" to="/technicians/create">Create Technician</NavLink></li>
                <li><NavLink className="dropdown-item" to="/technicians">Technician List</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments/create">Create Appointment</NavLink></li>
                <li><NavLink className="dropdown-item" to="/appointments">Appointment List</NavLink></li>
                <li><NavLink className="dropdown-item" to='./ServiceHistory'>Service History</NavLink></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
