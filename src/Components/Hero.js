import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import wine5 from './Images/wine5.jpg';



export default function Hero() {
  return (
    <div id="img-container">
      <Image
        className="cover-img"
        src={wine5}
      />
    </div>
  )
}
