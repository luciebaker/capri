import React from 'react'
import {StaticQuery, graphql} from 'gatsby'
import Img from 'gatsby-image'


export default function Specialty () {
    return (
        <StaticQuery query={graphql`
        {
        img1:file(relativePath: {eq: "pasta.jpg"}) {
            childImageSharp {
                fluid(quality: 90, maxWidth: 650) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    
        }
            `}
            render ={data => {
                const pasta = data.img1.childImageSharp.fluid  
                return (
                    <section id="dishes" className="dishes">
                    <div className="container text-center">
                        <h2 className="section-header">Our Signature Dishes</h2>
                    </div>
                    <div class="row dishes-row">
                        <div class="col-md-4">
                        <div class="card dishes-card">
                            <Img className="card-img-top" alt="pasta" fluid={pasta}/>
                            <div class="card-body">
                            <h4>Ravioli di Burrata e Tartufo Nero</h4>
                            <p class="card-text">Ravioli filled with burrata cheese and black truffle, tossed in
                            porcini mushrooms sauce and topped with crispy parma ham</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card dishes-card">
                            <Img className="card-img-top" alt="pasta" fluid={pasta}/>
                        <div class="card-body">
                            <h4>Risotto alla Catalana</h4>
                            <p class="card-text">Rich combination of mixed seafood, chicken, artichokes, black olives and garden peas in saffron sauce</p>
                        </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card dishes-card">
                            <Img className="card-img-top" alt="pasta" fluid={pasta}/>
                        <div class="card-body">
                            <h4>Cannelloni Ricotta e Spinachi</h4>
                            <p class="card-text">Rolled pasta sheets with fillings of spinach and ricotta cheese oven baked with creamy béchamel sauce</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </section> 
                )
            }
        }/>
    )
}