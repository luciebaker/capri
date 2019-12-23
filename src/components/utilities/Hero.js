import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'


const Hero = ({img, className, children}) => {
    return (
        <div className="container-fluid">
        <BackgroundImage className={className} fluid={img}>
            {children}
        </BackgroundImage>
        </div>
    )
}
 
export default styled(Hero)`
    min-height: 80vh;
    background-position: center center;
    display: flex;
    justify-content: center;
    
`