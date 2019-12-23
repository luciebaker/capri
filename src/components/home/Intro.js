import React from 'react'
import logo from '../../images/CapriccioPastaCafe.png'

const Intro = () => {
    return (
    <section id="about" class="about">
    <div className= "container text-center">
        <div className= "section-header">
            <img className="intro-logo" src={logo} alt="Capriccio Pasta Cafe Logo"/>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
        irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    </div>
    </section>
    )
}

export default Intro