import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Divider() {
  return(
    <Container style={{margin: '40px auto'}}>
      <Row>
        <Container style={{height: 'auto'}}>
          <h1>Welcome to the Greystone Winery</h1>
          <h4>Home of the best high end wine collection.</h4>
        </Container>
      </Row>
    </Container>
  )
}
