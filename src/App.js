import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import DisplayBalance from './components/DisplayBalance';
import TransferTokens from './components/TransferTokens';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Header/>
        <Row className="mt-5" style={{marginBottom: '30px'}}>
          <Col md={6}>
            <DisplayBalance />
          </Col>
          <Col md={6}>
            <TransferTokens />
          </Col>
        </Row>
      <Footer/>
    </Container>
  );
}

export default App;
