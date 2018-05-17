import React from 'react';

import Menu from './menu';

class Navbar extends React.Component {
  render() {

    let menu = [
      {id: 1, titulo: "Home", link: "#home"},
      {id: 2, titulo: "Sobre", link: "#sobre"},
      {id: 3, titulo: "Contato", link: "#contato"}
    ];

    let colorNav = "nav-wrapper " + this.props.color;

    return (
      <nav>
        <div className={colorNav}>
          <div className="container">
            <a href="#" className="brand-logo">{this.props.titulo}</a>
            <Menu menu={menu}/>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;