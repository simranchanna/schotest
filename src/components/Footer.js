import React, { Component } from 'react';
import { Row,Col, Button} from 'react-bootstrap';
import './Footer.css'

class Footer extends Component {
  render() {
    return(
      <React.Fragment>
        <section  className='footer-top'>
          <Row>
            <Col>
            <div>
              <i className="fas fa-map-marker-alt top-icon"></i>
              <h3 className='top-heading'>Address</h3>
              <a  href='https://goo.gl/maps/5d4SifsjuEv3A1yK6'>Plot No: 22-23, Hari Vihar, Opp Pillar No: 815, Sector 16A, Near Dwarka Metro Station, Delhi 110078.</a>
            </div>
            </Col>
            <Col>
            <div>
              <i className="fas fa-phone fa-rotate-90 top-icon"></i>
              <h3 className='top-heading'>Phone</h3>
              <p>
              +91 9315514145<br />
              +91 9315518998
              </p>
            </div>
            </Col>
            <Col>
            <div>
              <i className="fas fa-envelope top-icon"></i>
              <h3 className='top-heading'>Mail</h3>
              <p>Email : <a href='mailto:info.schotest@gmail.com'>info.schotest@gmail.com</a></p>
            </div>
            </Col>
          </Row>

        </section>
        <section className='footer-down'>
            <Row>
              <Col xs={6} lg={3}>
                <h3 className='heading'>Information</h3>
                <p>At SchoTest, we provide ample opportunities to unearth the latent <br />
                potential of the students by aiding them financially and academically <br />
                through our "Scholars of India" initiative. It is a scholarship programme <br />
                whereby awards will be dispersed to classes from 5th to 12th in three <br />
                different categories- District, State and National.</p>
              </Col>
              <Col xs={6} lg={3}>
                <h3 className='heading'>Quick Links</h3>
                <Row>
                  <Col>                    
                      <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>Home</a><br />
                      <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>About</a><br />
                      <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>Blogs</a><br />
                      <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>Career</a><br />
                      <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>Refund Policy</a><br />
                      <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>Team Members</a><br />                    
                  </Col>
                  <Col>
                    <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>Privacy Policy</a><br />
                    <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>Contact Us</a><br />
                    <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>FAQs</a><br />
                    <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>Gallery</a><br />
                    <a className='quick-link' href="https://schotest.com/"><i className="list-icon fas fa-angle-right"></i>Terms and Conditions</a><br />
                  </Col>
                </Row>
              </Col>
              <Col xs={6} lg={3}>
                <h3 className='heading'>Newsletter</h3>
                <p>Drop your e-mails, so that you don’t miss any important updates from<br />SchoTest.</p>
                <form>
                  <input  className='email-submit' type='email' placeholder='Enter your email here' />
                  <Button className='email-btn' type='submit'>  <i className="far fa-paper-plane"></i></Button>
                </form>               
              </Col>  
              <Col xs={6} lg={3}>
                <h3 className='heading'>Social Links</h3>
                <a className='social-links' href='https://in.pinterest.com/schotest'><i className="fab fa-pinterest-square"></i></a>
                <a className='social-links' href='https://www.instagram.com/schotest'><i className="fab fa-instagram"></i></a>
                <a className='social-links' href='https://www.youtube.com/channel/UClAY5RqXRzVy9y436l1GikQ'><i className="fab fa-youtube"></i></a>
                <a className='social-links' href='https://www.linkedin.com/in/scho-test-a4b6b2165/'><i className="fab fa-linkedin"></i></a>
                <a className='social-links' href='https://www.facebook.com/schotestbyshree'><i className="fab fa-facebook-square"></i></a><br />
                <a className='social-links' href='https://twitter.com/schotest'><i className="fab fa-twitter"></i></a>
              </Col>
            </Row>
        </section>
      </React.Fragment>
    )
  }
}

export default Footer;
