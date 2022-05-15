import React from 'react'
import IconImage from '../Images/ineuron-logo.jpg'
import NavberStyle from '../Styles/NavberStyle.css'

const Navber = () => {
    return (
        <div className='d-flex justify-content-between align-items-center my-4' style={{margin:"0rem 6rem"}} >

            <ul className="navLinks">
                <a href="#"><li><img src={IconImage} className='logo'/></li></a>
                <a href="#"> <li> Home </li> </a>
                <a href="#"> <li> Coruses </li> </a>
                <a href="#"> <li> Internship </li> </a>
                <a href="#"> <li> Became an affiliate </li> </a>
                <a href="#"> <li> Hall of Farm </li> </a>
                <a href="#"> <li> Careers </li> </a>
            </ul>

            <div className="buttons">
                <button className="signUp"> Sign Up </button>
                <button className="signIn"> Sign In </button>
            </div>

        </div>
    )
}


export default Navber