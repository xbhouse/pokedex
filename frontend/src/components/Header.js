import React from 'react';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="https://pokeapi.co/"><h2 className="nav-header page-title">Pokedex</h2></a>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link active" href="https://pokeapi.co/"><p className="header-text">Register</p></a>
          </li>
        </ul>
    </div>
  </nav>
  )
}

export default Header;
