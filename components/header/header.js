import React, {Component}from 'react';
import './header.css';


class Header extends Component{
  render(){
    return(
      <div className="header">
        <header>
        <div className="center">
        <nav id='menu'>
          <ul type='disc'>
            <li><a href={`tribruxo`}>Tribruxo</a></li> 
            <li><a href={`casas`}> Qual sua casa? </a></li>
            <li><a href={`quadribol`}>Quadribol</a></li> 
            <li><a href={`home`}> Hogwarts </a></li>s
            <li><a href={`aulas`}>Aulas</a></li>
            <li><a href={`sobre`}>Sobre</a></li>
            <li><a href={`fundadores`}> Fundadores </a></li>

          </ul>
        </nav>
        </div>
        </header>
        
      </div>

    );
  }
}
export default Header;