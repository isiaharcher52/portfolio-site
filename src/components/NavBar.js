import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaGithub, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { useState, useEffect } from 'react';
import logo from '../assets/img/profilepicnew.png';

function NavBar() {
    const[activeLink, setActiveLink] = useState('home'); //setting useStates to check for links and if the page has been scrolled
    const[scrolled, setScrolled] = useState(false);

    useEffect(() => {                                   //func related to navlinks used to see if
        const onScroll = () => {                        //user has scrolled. if it is top of page, header
            if(window.scrollY > 50) {                   //will be transparent(setScrolled(true)). when scrolled down enough,
                setScrolled(true);                      //it will be a black navbar(setScrolled(false))
            } else{
                setScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[])

const onUpdateActiveLink = (value) => {
    setActiveLink(value);
}

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand>
        <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://github.com/isiaharcher52"><FaGithub/></a>
                <a href="https://www.linkedin.com/in/isiaharcher/"><FaLinkedin/></a>
                <a href="#"><FaTwitterSquare/></a>
            </div>
            <button className="connect-button" onClick={() => console.log("connect")}><span>Let's Connect!</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;