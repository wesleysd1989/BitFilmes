
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Nav, NavbarBrand, NavbarToggler } from 'reactstrap';
import TodoForm from '../TodoForm/'

class Header extends Component {

  constructor(props) {
    super(props);
  }
  asideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }

  mobileAsideToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('aside-menu-hidden');
  }
  render() {
    return (
      <header className="app-header navbar">
        <NavbarBrand href="#" style={{ color: '#6FB914' }}><i className='fa fa-film'></i> BITFILMES</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavbarToggler className="d-md-down-none" onClick={this.asideToggle}>
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
          <NavbarToggler className="d-lg-none" onClick={this.mobileAsideToggle}>
            <span className="navbar-toggler-icon"></span>
          </NavbarToggler>
        </Nav>
      </header>
    );
  }
}

export default Header;
