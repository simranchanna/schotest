import React, { Component } from 'react';
import {Row , Col } from 'react-bootstrap'
import Navigation from './Navigation'
import Footer from './Footer'
import './Team.css'

class Team extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='top'>
          <Navigation />
        </div>  
        <section id='header'>
          <img className='logo-circles' src='https://schotest.com/assets/images/website/logo-circle.png' alt='logo'></img>
        </section>
        
        <section id='team-top'>
          <div>
            <h2 className='team-heading'>THE INITIATORS</h2>
            <Row className='team-row'>
              <Col lg={2}>
                <img className="team-img rounded-circle" src="https://schotest.com/assets/images/website/lalit.png" alt="Lalit Kumar"></img>
                <p className='name'>Lalit Kumar</p>
                <p>Founder & CEO</p>
                <p>(M.com. Delhi)</p>
              </Col>
              <Col lg={2}>
                <img className="team-img rounded-circle" src="https://schotest.com/assets/images/website/rajender.png" alt="Rajender Kumar"></img>
                <p className='name'>Rajender Kumar</p>
                <p>Chief Strategist</p>
                <p>(I.I.T. Delhi)</p>
              </Col>
              <Col lg={2}>
                <img className="team-img rounded-circle" src="https://schotest.com/assets/images/website/purushottam.png" alt="Purushottam Ranga"></img>
                <p className='name'>Purushottam Ranga</p>
                <p>Chief Content Advisor</p>
                <p>(I.I.T. Delhi)</p>
              </Col>
              <Col lg={2}>
                <img className="team-img rounded-circle" src="https://schotest.com/assets/images/website/nikunj.png" alt="Nikunj Sharma"></img>
                <p className='name'>Nikunj Sharma</p>
                <p>Chief Accounting Officer</p>
                <p>(CA)</p>
              </Col>
              <Col lg={2}>
                <img className="team-img rounded-circle" src="https://schotest.com/assets/images/website/mahendra.png" alt="Mahendra Singh"></img>
                <p className='name'>Mahendra Singh</p>
                <p>Director</p>
                <p>(B.B.A.)</p>
              </Col>
            </Row>
          </div>
        </section>
        <section id='support-team'>
          <div className='container'>
            <h2 className='team-heading'>SUPPORT TEAM</h2>
            <Row>
              <Col lg={2}>
                <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d287095972cc.png" alt="Devender Kumar"></img>
                <p className='name'>Devender Kumar</p>
                <p>Deputy Strategist</p>
              </Col>
              <Col lg={2}>
                <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d2870fa12d03.png" alt="Shefali Saxsena"></img>
                <p className='name'>Shefali Saxena</p>
                <p>Head H.R.</p>
              </Col>
              <Col lg={2}>
                <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d28713346f13.png" alt="Rushabh"></img>
                <p className='name'>Rushabh</p>
                <p>Web Developer</p>
              </Col>
              <Col lg={2}>
                <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d2871813a38b.png" alt="Ashish"></img>
                <p className='name'>Ashish</p>
                <p>Deputy H.R.</p>
              </Col>              
              <Col lg={2}>
                <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d2871bf0a8e0.png" alt="Suraj"></img>
                <p className='name'>Suraj</p>
                <p>Sr Graphics Designer</p>
              </Col>
              <Col lg={2}>
                <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d2871fc6d259.png" alt="Vikash"></img>
                <p className='name'>Vikash</p>
                <p>Content Developer</p>
              </Col>
            </Row>
            <Row>
              <Col lg={2}>
              <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d28730cec544.png" alt="Sandeep"></img>
                <p className='name'>Sandeep</p>
                <p>Facility Manager</p>
              </Col>
              <Col lg={2}>
              <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d28733f5a14c.jpeg" alt="Nikhil"></img>
                <p className='name'>Nikhil</p>
                <p>Front-End Developer</p>
              </Col>
              <Col lg={2}>
              <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d287364bfd67.png" alt="Naman"></img>
                <p className='name'>Naman</p>
                <p>Jr Web Developer</p>
              </Col>
              <Col lg={2}>
              <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d2873bc41ada.png" alt="Srishty Bhasin"></img>
                <p className='name'>Srishty Bhasin</p>
                <p>H.R. Executive</p>
              </Col>
              <Col lg={2}>
              <img class="team-img rounded-circle" src="https://schotest.com/assets/uploads/team/thumbnails/5d287432c55a6.png" alt="Tanya"></img>
                <p className='name'>Tanya</p>
                <p>H.R. Executive</p>
              </Col>
            </Row>
          </div>
        </section>
        <Footer />
        
      </React.Fragment>
    )
  }
}

export default Team;
