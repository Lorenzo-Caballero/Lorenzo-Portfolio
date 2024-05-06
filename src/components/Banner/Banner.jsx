import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import ParticleComponent from "../Particles/Particles";
import { initialDescription, particlesData } from "../utils/utils";

export const Banner = ({language}) => {
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const [index, setIndex] = useState(0);
  const period = 2000;
  useEffect(() => {
    const ticker = () =>{
      setInterval(() => {
        setIndex(prevIndex => (prevIndex + 1) % toRotate.length);
      }, period);
      return () => { clearInterval(ticker) };
    }
    ticker()
  }, [])

  const scrollToSection = () => {
    const section = document.getElementById("connect");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="banner" id="home"> 
      <ParticleComponent data={particlesData} />
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">{initialDescription[language].tag}</span>
                  <h1>{initialDescription[language].title}</h1>
                  <h1 className="animationText">{toRotate[index]}</h1>
                  <p>{initialDescription[language].description}</p>
                  <button onClick={scrollToSection}>{initialDescription[language].contact}<ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          {/* <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col> */}
        </Row>
      </Container>
    </section>
  )
}
