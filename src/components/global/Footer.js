import React, { Component } from 'react'
import logo from '../../images/CapriccioPastaCafe.png'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'

export default class Footer extends Component {
    render() {
        return (
<section id="footer" className="footer">
<div className="container">
    <div className="row"> 
        <div className="col-md-4">
            <img className="footer-logo" src={logo} alt="Capriccio Pasta Cafe Logo"/>
            <p className="pt-4">Lorem ipsum dolor sed do eiusmod tempor incididunt et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud consequat.</p>
        </div>
        <div className="col-md-4">
            <h3>Contact</h3>
            <hr></hr>
            <ul className="contact list-unstyled">
                    <li><FaMapMarkerAlt />  Find us Here</li>
                    <li><FaPhone />  Give us a call</li>
                    <li><FaEnvelope />  Email us</li>
                </ul>
        </div>
        <div className="col-md-4">   
        <h3>Newsletter</h3>
        <hr></hr>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod.</p>
        <form>
                <div className="form-group">
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email address"/>
                </div>
                <button type="submit" className="btn btn-unique mb-3">Subscribe</button>
            </form>
        </div>
    </div>
</div>
<div className="copyright">
<p class="text-center copyright-text">&copy; {new Date().getFullYear().toString()} Capriccio | A concept website by <a href="https://lbmedia.netlify.com/">LB Media</a></p>
</div>
</section>
        )
    }
}
