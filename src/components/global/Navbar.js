import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/CapriccioPastaCafe.png'


export default class Navbar extends Component {
    state = {
        navbarOpen: false,
        css: "collapse navbar-collapse",
        links: [
            {
                id: 1,
                path: '/#about',
                text: 'About'
                },
            {
                id: 2,
                path: '/#menu',
                text: 'Menu'
                },
            {
                id: 3,
                path: '/#reservation',
                text: 'Reservation'
                },
            {
                id: 4,
                path: '/#footer',
                text: 'Contact'
                }   
        ]
    }

    navbarHandler = () => {
        this.state.navbarOpen
        ? this.setState({
            navbarOpen: false,
            css: "collapse navbar-collapse"
            })
        : this.setState({
            navbarOpen: true,
            css: "collapse navbar-collapse show"
            });
    };

    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top shrink navbar-light">
            <Link to='/' className="navbar-brand">
            <img className="navbar-brand navbar-logo" src={logo} alt="Capriccio Pasta Cafe Logo"/>
            </Link>
            <button className="navbar-toggler" aria-label="toggle navbar" type="button" onClick={this.navbarHandler}>
            <span className="navbar-toggler-icon" />
            </button>
            <div className={this.state.css}>
            <ul className="navbar-nav ml-auto">
            {this.state.links.map(link => {
                return (
                    <li key={link.id} className="nav-item">
                    <Link to={link.path} className="nav-link">
                    {link.text}
                    </Link>
                    </li>
                )     
            })}
            </ul>
            <a id="open-reservation" href="#reservation-modal" class="btn navbar-btn btn-unique d-none d-lg-inline-block">Make a Reservation</a>
            </div>
            </nav>
        )
    }
}
