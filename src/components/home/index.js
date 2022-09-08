import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../Header/index'
const Home = ({employees }) => {
    const divStyle = {
        fontWeight: 'bold',
        fontSize: '1.2rem',
        marginTop: '15px',
        marginLeft:'95px',
        padding: '10px',
        position: 'absolute',
        top: '11%',
        left:'20%',
    }

  return (
      <Container style={divStyle}>
            <header><Header heading={'Welcome to AdTech Corp'} /></header>
      </Container>
  )
}

export default Home