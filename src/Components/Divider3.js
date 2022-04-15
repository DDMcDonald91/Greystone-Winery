import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Divider3() {
  return(
    <Container style={{margin: '40px auto'}}>
      <Row>
        <Container style={{height: 'auto'}}>
          <h1>A family of wine lovers worldwide.</h1>
          <h4>Join the family and with us.</h4>
        </Container>
      </Row>
    </Container>
  )
}
