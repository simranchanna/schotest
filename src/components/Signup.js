import React from 'react'
import {Button,Modal} from 'react-bootstrap'
import './Signup.css'

function Signup() {
    const [show, setShow] = React.useState(false);
  
    return (
      <React.Fragment>
        <span className='row top-bar'>
                <form className='location'>
                <select className='location'>
                <option value="0" defaultValue="selected">---Select Location---</option>
                <option value="31">Andaman And Nicobar</option>
                <option value="9">Andhra Pradesh</option>
                <option value="10">Arunachal Pradesh</option>
                <option value="11">Assam</option>
                <option value="6">Bihar</option>
                <option value="32">Chandigarh</option>
                <option value="12">Chhattisgarh</option>
                <option value="33">Dadra And Nagar Haveli</option>
                <option value="34">Daman And Diu</option>
                <option value="39">Delhi</option>
                <option value="4">Goa</option>
                <option value="7">Gujarat</option>
                <option value="1">Haryana</option>
                <option value="13">Himachal Pradesh</option>
                <option value="5">Jammu And Kashmir</option>
                <option value="14">Jharkhand</option>
                <option value="15">Karnataka</option>
                <option value="16">Kerala</option>
                <option value="35">Lakshadweep</option>
                <option value="17">Madhya Pradesh</option>
                <option value="18">Maharashtra</option>
                <option value="19">Manipur</option>
                <option value="20">Meghalaya</option>
                <option value="21">Mizoram</option>
                <option value="22">Nagaland</option>
                <option value="23">Odisha</option>
                <option value="36">Puducherry</option>
                <option value="3">Punjab</option>
                <option value="8">Rajasthan</option>
                <option value="24">Sikkim</option>
                <option value="25">Tamil Nadu</option>
                <option value="26">Telangana</option>
                <option value="27">Tripura</option>
                <option value="30">West Bengal</option>
                <option value="28">Uttar Pradesh</option>
                <option value="29">Uttarakhand</option>
                </select>
                </form>
                </span>
        <Button className='sign-up'  onClick={() => setShow(true)} variant="link"><i className="fas fa-list"></i>  Sign Up</Button>
  
        <Modal
          className='modals'
          show={show}
          onHide={() => setShow(false)}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
        >
          <Modal.Header closeButton />

          <Modal.Body >
          <img className='logo-modal' src='https://schotest.com/assets/images/website/logo-circle.png' alt='logo'></img>
          <h3 className='modal-signup'>Sign Up</h3>
          <div >
          <Button className='modal-btns' size="lg" block>Student</Button>
          <Button className='modal-btns' size="lg" block>Business Development<br />Executive</Button>
          <Button className='modal-btns' size="lg" block>School</Button>
          </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }

export default Signup