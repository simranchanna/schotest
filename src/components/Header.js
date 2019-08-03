import React,{Component} from 'react'
import Signup from './Signup'
import './Header.css'

class Header extends Component{

    render(){
        return(
            <div className='header'>
                <Signup />
                
                <div className='cont'>
                    <h2>Find Best Schools Around You.</h2>
                </div>
                <div>
                    <div className='cont-2 '>
                        <img className='logo-circle' src='https://schotest.com/assets/images/website/logo-circle.png' alt='logo'></img>                    
                        <input type='text' placeholder='Search Schools...'></input>
                        <button className='search-btn' type='search'>SEARCH</button>
                    
                    </div>

                </div>
                
                
                
            </div>
        )
    }
}

export default Header
