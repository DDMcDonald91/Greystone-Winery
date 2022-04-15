import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import wine2 from './Images/wine2.jpg';
import wine3 from './Images/wine3.jpg';
import wine4 from './Images/wine4.jpg';
import wine5 from './Images/wine5.jpg';


export default function About() {
  return (
    <Container style={{height: 'auto', width: 'auto', margin: '10px auto'}}>
      <Row style={{height: 'auto', width: '90%', margin: '20px auto'}}>
        <Col>
          <Card style={{ width: '18rem', border: 'none', margin: '5px auto'}}>
            <Card.Img rounded variant="top" src={wine2} className="item" />
            <Card.Body>
            <Card.Title>Superior Taste</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', border: 'none', margin: '5px auto'}}>
            <Card.Img rounded variant="top" src={wine3} className="item" />
            <Card.Body>
            <Card.Title>Elegance Defined.</Card.Title>

            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', border: 'none', margin: '5px auto'}}>
            <Card.Img rounded variant="top" src={wine4} className="item" />
            <Card.Body>
            <Card.Title>Elevated Branding.</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
