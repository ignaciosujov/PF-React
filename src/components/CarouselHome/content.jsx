import fondoHome from "../assets/img/fondoHome.jpg"
import fondoHome2 from "../assets/img/fondoHome2.jpg"
import fondoHome3 from "../assets/img/fondoHome3.jpg"
import './content.css'


/* function ContentHome(){
    return(
        <div className="contentHome">
            <h1>Enciende <span>Tu Luz Interna</span></h1>
            <img src={fondoHome} alt="" className="fondoHome"></img>
        </div>
    )
}

export default ContentHome */

import Carousel from 'react-bootstrap/Carousel';

function CarouselHome() {
  return (
    <Carousel className="carouselHome">
      <Carousel.Item interval={9000}>
        <img
          className="d-block w-100 img1"
          src={fondoHome}
          alt="First slide"
        />
        <Carousel.Caption className="carouselTitle">
        <h3>Enciende Tu <span>Luz</span> Interior</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img
          className="d-block w-100 img2"
          src={fondoHome2}
          alt="Second slide"
        />
        <Carousel.Caption className="carouselTitle">
        <h3>Enciende Tu <span>Luz</span> Interior</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={9000}>
        <img
          className="d-block w-100 img3"
          src={fondoHome3}
          alt="Third slide"
        />
        <Carousel.Caption className="carouselTitle">
        <h3>Enciende Tu <span>Luz</span> Interior</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;