import React,{Component} from 'react'
import './Navigation.css'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import {Link } from 'react-router-dom'

class Navigation extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar collapseOnSelect className='navigation-link' expand="lg" variant="dark">
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className='navigation-link'>
                       <Nav.Link href="/home">HOME</Nav.Link>
                       <NavDropdown title="ABOUT US" id="collasible-nav-dropdown">
                           <Link to='/team'><NavDropdown.Item href="#action/2.1">TEAM</NavDropdown.Item></Link>
                        </NavDropdown>
                        <Nav.Link className='navigation' eventKey='link-1'>SCHOOLS</Nav.Link>
                        <Nav.Link className='navigation' eventKey='link-2'>EVENTS</Nav.Link>
                        <Nav.Link className='navigation' eventKey="link-3">BLOGS</Nav.Link>
                        <NavDropdown title="NSI" id="collasible-nav-dropdown">
                           <NavDropdown.Item href="#action/4.1">WHY US</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='navigation' eventKey="link-4">SCHOLARS OF INDIA</Nav.Link>
                        <NavDropdown title="EXAM" id="collasible-nav-dropdown">
                           <NavDropdown.Item href="#action/5.1">Exam Pattern</NavDropdown.Item>
                           <NavDropdown.Item href="#action/5.2">Exam Syllabus</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className='navigation' eventKey="link-6">CONTACT US</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    </Navbar>

            </React.Fragment>
        )
        
    }
}

export default Navigation