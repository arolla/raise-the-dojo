import React from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import image from '../img/header.jpg'

import SEO from '../components/SEO'
import config from '../../data/SiteConfig'
import CtaButton from '../components/CtaButton'
import Navigation from '../components/Layout/Navigation'

class Index extends React.Component {
  render() {
    const allSEOMarkdown = this.props.data.allMarkdown.edges

    return (
      <div className="index-container">
        <Helmet title={config.siteTitle} />
        <SEO postEdges={allSEOMarkdown} />
        <main>
          <IndexHeadContainer>
            <Navigation />
            <Hero>
              <img src={config.siteLogo} width="150px" alt="" />
            </Hero>
          </IndexHeadContainer>
          <BodyContainer>
            <h1>{config.siteTitle}</h1>
            <h4>{config.siteDescription}</h4>
            <p>
            Notre métier change et se transforme plus rapidement que nos carrières. 
            Les compétences et méthodes d'aujourd'hui ne seront pas celles demain. 
            Ne restez pas sur les meilleures pratiques d'hier :-) 
            Le mouvement Software Craftsmanship explore les pratiques en cours de découverte, 
            diffuse les meilleures connues à ce jour. Dans cet esprit, 
            il existe de multiple activités comme la participations aux meetups, conférences, formations, etc.
            </p>
            <hr />
            <h2>Animation Craft : booster votre excellence technique</h2>
            <p>
            Pour booster l'excellence technique des développeurs ! 
            Un Dojo est une séance de travail en groupe sur des exercices d'entrainement pour développer notre propre excellence technique.
            Il y a trois facteurs "principaux" de motivations qui touchent au salaire, 
            à la reconnaissance des pairs et à la maitrise de son domaine. 
            Par les dojos, nous proposons de développer cette maitrise de l'art du développement.
            </p>
            <CtaButton to={'/introduction'}>Démarrez !</CtaButton>

            <div className="contributors">
              <p>
                Gatsby theme created by Eric Windmill.{' '}
                <a href="https:twitter.com/ericwindmill">
                  You should follow him on Twitter.
                </a>{' '}
                Also, <a href="https://github.com/Levino">Levin Keller</a> for
                making it better than I could{"'"}ve alone.
              </p>
            </div>
          </BodyContainer>
        </main>
      </div>
    )
  }
}

export default Index

const IndexHeadContainer = styled.div`
  background-image: url(${image});
  padding: ${props => props.theme.sitePadding};
  text-align: center;
`

const Hero = styled.div`
  padding: 50px 0;
  color: white;
  & > h1 {
    font-weight: 600;
    color: white;
  }
`

const BodyContainer = styled.div`
  padding: ${props => props.theme.sitePadding};
  max-width: ${props => props.theme.contentWidthLaptop};
  margin: 0 auto;

  .contributors {
    max-width: 400px;
    margin: 100px auto 0;
  }
`

/* eslint no-undef: "off" */
export const pageQuery = graphql`
  query IndexQuery {
    allMarkdown: allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
    posts: allMarkdownRemark(
      limit: 2000
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
          timeToRead
          frontmatter {
            title
            tags
            cover
            date
          }
        }
      }
    }
  }
`
