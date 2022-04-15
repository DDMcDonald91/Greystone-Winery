import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Divider2() {
  return(
    <Container style={{margin: '40px auto'}}>
      <Row>
        <Container style={{height: 'auto'}}>
          <h1>Artisans from around the World</h1>
          <h4>Wine experts gathered for one purpose.</h4>
        </Container>
      </Row>
    </Container>
  )
}
