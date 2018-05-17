import React from 'react';

class Menu extends React.Component {
  render() {

    let lista = this.props.menu.map((item) => {
      return (
        <li key={item.id}>
          <a href={item.link}>{item.titulo}</a>
        </li>
      );
    });

    return (
      <ul id="nav-mobile" className="right">{lista}</ul>
    );
  }
}

export default Menu;