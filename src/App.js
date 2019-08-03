import React from 'react';
import './App.css';
import Header from './components/Header.js'
import Navigation from './components/Navigation.js'
import  Footer from './components/Footer.js'
import { Container,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'


function App() {
  return (
    <div className="App">
        <Header />
        <div className='navv'>
          <Navigation />
        </div>
        <Container className='school-container'>
        <Row>
          <Col md={2}><h3 className='main-headings'>SCHOOLS</h3></Col>
        </Row>
        <Row>
          <Col md={2}><h3 className='main-headings'>GALLERY</h3></Col>
        </Row>
        <Row>
          <Col md={6}><h3 className='main-headings'>NOTIFICATIONS</h3></Col>
          <Col md={6}><h3 className='main-headings'>EVENTS</h3></Col>  
        </Row>
        <Row>
          <Col md={2}><h3 className='main-headings'>BLOGS</h3></Col>
        </Row>
        </Container> 
        <section id='founder'>
          <Row>
            <Col lg={6} xs={12}>
            <Card className='founder-img'>
              <Card.Img  src="https://schotest.com/assets/images/website/founder-pen-image.png" alt="Founder Image" />
            </Card>
            </Col>
            <Col lg={6} xs={12}>
            <h5 className='founder-hd'>From the Founder's Pen</h5>
            <p>
            "It is easier to build strong children than to repair broken men". A wise quote referring to the role that children could play in laying the foundation of a strong nation. I believe that the foundation of a strong nation depends on the way its children are cared for and nurtured. In order to build a strong nation, we must instill good values in our children providing them love and care, guiding them through thick and thin till they become confident and strong enough. This all can be done through “Quality education”. The “Quality Education” is an everlasting birthright of child.I urge you all to support quality education because without it we can't sustain or enjoy the independence that we have. Let’s start a revolution for quality education for every child of our country so that we can help ourselves and children to build a better future and a proud nation.
            </p>
            <p className='founder-name'>
              -Lalit Kumar
            </p>
            </Col>
          </Row>
        </section>
        <section>
          <div className='bde'>
            <h2>Business Development Executive</h2>
            <p>There are no any bde found.</p>
          </div>
          <Container>
            <Row className='associ'>
              <Col>
                <div className='associates'>
                  <h4>ASSOCIATES</h4><hr />
                  <p>We believe in cumulative growth with our associates and keep them on-board for the long term while maintaining a healthy relationship.</p>
                </div>
              </Col>
              <Col className='asso-img'>
                <a href='https://schotest.com'><img className='asso-img' src='https://schotest.com/assets/uploads/associates/5b6985435922b.jpeg' alt=''></img></a>                  
              </Col>
              <Col className='asso-img'>
                <a href='https://schotest.com'><img className='asso-img' src='https://schotest.com/assets/uploads/associates/5b698574461fd.jpeg' alt=''></img></a>
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />  
    </div>
  );
}

export default App;
