import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import wine3 from './Images/wine3.jpg';



export default function Detail() {
  return (
    <>
    <Container id="details-container" style={{height: 'auto', width:'100vw'}}>
      <Row fluid>
        <Col lg={6} md={12}>
        <Card style={{background: 'rgb(132, 176, 130)', border: '2px solid black'}}>
          <Container style={{height: 'auto'}}>
          <h2 style={{margin: '10px auto'}}>About Greystone Winery</h2>
          <div style={{width: '80%', margin: '5px auto'}}>
            <p>Greystone Winery is committed to producing quality wines that highlight the unique terroir of the Greystone Vineyard located in Dallas, Texas. We pride ourselves on planting grapes that thrive in the semi-arid climate of the region and strive to continuously improve the growing process in a sustainable way to enhance the character and structure of our wines. Our founding team of young talents invite you to enjoy the results of our hard work and dedication to true Texas winemaking.</p>
          <br/>
            <p>We not only pride ourselves as high end wine producers, but a collection of various local wine brands that are associated with us. With a powerful and well connected network, we aim to make sure all of your wine needs are met. We work with only the finest of companies to ensure our standards are always met.</p>
          </div>
          </Container>
          </Card>
        </Col>
        <Col lg={6} md={12}>
          <div style={{ background: 'white'}} id="details-pic-container">
          <img
            className="details-pic"
            rounded
            src={wine3}
          />
          </div>
        </Col>
      </Row>
    </Container>
    </>
  )
}
