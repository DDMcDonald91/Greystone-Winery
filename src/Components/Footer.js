import Nav from 'react-bootstrap/Nav';

export default function Footer() {
  return (
    <Nav style={{background: '#f8f9fa', color: 'black'}} variant="light" className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="#home">Back to Top</Nav.Link>
          <br/>
          <p>Designed by DDM Web Designs</p>
        </Nav.Item>
      </Nav>
  )
}
