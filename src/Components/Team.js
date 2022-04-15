import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import team1 from './Images/team1.jpg';
import team2 from './Images/team2.jpg';
import team3 from './Images/team3.jpg';

export default function Team() {
  return (
    <Container id="team" style={{height: 'auto', width: 'auto', margin: '10px auto'}}>
      <Row style={{height: 'auto', width: '90%', margin: '20px auto'}}>
        <Col>
          <Card style={{ width: '18rem', border: '2px solid black', margin: '5px auto', background: 'rgb(132, 176, 130)'}}>
            <Card.Img rounded variant="top" src={team1} className="item" />
            <Card.Body>
            <Card.Title>
            Isaac Suiz
            <br/>
            Sommelier
            </Card.Title>
            <Card.Text>
            "Success is not given but earned. Only by pressing on."
            </Card.Text>
            <Button variant="light">Follow</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', border: '2px solid black', margin: '5px auto', background: 'rgb(132, 176, 130)'}}>
            <Card.Img rounded variant="top" src={team2} className="item" />
            <Card.Body>
            <Card.Title>
            Pierre Aaffi
            <br/>
            Sommelier/Founder
            </Card.Title>
            <Card.Text>
              "Some of the world's greatest gifts are the most simplistic."
            </Card.Text>
            <Button variant="light">Follow</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '18rem', border: '2px solid black', margin: '5px auto', background: 'rgb(132, 176, 130)'}}>
            <Card.Img rounded variant="top" src={team3} className="item" />
            <Card.Body>
            <Card.Title>
            Sarra Rose
            <br/>
            Sommelier
            </Card.Title>
            <Card.Text>
            "Redefine what is the norm. Break boundaries and stigmas."
            </Card.Text>
            <Button variant="light">Follow</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}
