import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'
import image from '../../img/header.jpg'

class MainHeader extends React.Component {
  render() {
    return (
        <SiteContainer >
          <Navigation />
        </SiteContainer>
    )
  }
}

const SiteContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${image});
  padding: 25px;
`

export default MainHeader
