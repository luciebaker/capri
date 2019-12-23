import React from "react"
import Layout from "../components/layout"
import Hero from "../components/utilities/Hero"
import Intro from "../components/home/Intro"
import Specialty from "../components/home/Specialty"
import Menu from "../components/home/Menu"
import Reservation from "../components/home/Reservation"
import SEO from "../components/seo"
import { graphql } from 'gatsby'

export default ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Hero img={data.HeroImage.childImageSharp.fluid} />
    <Intro />
    <Specialty />
    <Menu />
    <Reservation />
  </Layout>
)

export const query = graphql`
query {
  HeroImage: file(relativePath: {eq: "pasta.jpg"}) {
    childImageSharp {
      fluid(quality: 90, maxWidth: 4160) {
        src
      }
    }
  }
}
`
