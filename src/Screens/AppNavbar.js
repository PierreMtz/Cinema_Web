import React from 'react';
import logo from '../img/logo.png'; 
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class AppNavbar extends React.Component {
  constructor(props){
    super(props)

    this.state =  {
      prenom: 'Pierrito',
      nom: 'Martinez',
      age:19,
      fleur: { couleur:'rose'}
    }

  }
 

  render(){
    return (
      <Navbar className="navbarClass fixed-top" expand="lg">
        <Navbar.Brand><img src={logo} className="logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">          
        </Nav>
        <Link to="Admin"><a href="#"  className="btn btn-primary" >Administration</a> </Link> 
        </Navbar.Collapse>  
      </Navbar>

    );
  }
}

export default AppNavbar;
