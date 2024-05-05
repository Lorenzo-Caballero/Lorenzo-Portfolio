import gsap from "gsap";
import { useEffect, useRef } from "react";
import styled from "styled-components";

import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cone from "../../assets/3dtube.png";
import Tube from "../../assets/3dtriangle.png";
import Capsule from "../../assets/3dcapsule.png";

import TextBlock from "../../components/TextBlock";
import SvgBlock from "../../components/SvgBlock";

const ServiceSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding-top: 10rem; /* Adjusted padding for mobile */
`;

const Background = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  width: 100vw;
  height: 85vh;
  z-index: -1;
  background-color: #0a0b10;
  background-size: auto 100vh;
  background-repeat: no-repeat;
`;

const Title = styled.h1`
  color: var(--white);
  display: inline-block;
  font-size: 2rem; /* Default font size */
  margin-top: 1rem;
  position: relative;
  &::before {
    content: "";
    height: 1px;
    width: 50%;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0.5rem);
    border-bottom: 2px solid var(--pink);
  }

  @media only screen and (max-width: 48em) {
    font-size: 1.5rem; /* Adjusted font size for mobile */
  }
`;

const Line = styled.span`
  border-left: 4px solid var(--background);
  height: 10rem; /* Adjusted height for mobile */
  margin-top: 2rem;
  border-radius: 20px 20px 0 0;
`;

const Triangle = styled.span`
  display: ${({ isMobile }) => (isMobile ? 'none' : 'block')};
  width: 0;
  height: 0;
  border-left: 1rem solid transparent;
  border-right: 1rem solid transparent;
  border-top: 1.5rem solid var(--background); /* Adjusted size for mobile */
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start; /* Align items to the start of the flex container */
  margin: 5rem 5rem; /* Adjusted margin for mobile */
  position: relative;

  @media only screen and (max-width: 64em) {
    margin: 5rem calc(2rem + 2vw); /* Adjusted margin for tablet */
  }

  @media only screen and (max-width: 48em) {
    display: block;
    margin: 5rem calc(1rem + 2vw); /* Adjusted margin for mobile */
  }
`;

const OBJ = styled.div`
  position: absolute;
  top: ${({ isMobile }) => (isMobile ? '70%' : '80%')};
  right: 35%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  padding-top: ${({ isMobile }) => (isMobile ? '2rem' : '0')}; /* Add padding-top for responsive */
`;

const NeonSubText = styled.h5`
  font-size: 1.5rem; /* Default font size */
  color: white;
  text-shadow: 0 0 10px #8a2be2, 0 0 20px #8a2be2, 0 0 30px #8a2be2;

  @media only screen and (max-width: 48em) {
    font-size: 1rem; /* Adjusted font size for mobile */
  }
`;

const Services = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  const revealRefs = useRef([]);
  revealRefs.current = [];

  useEffect(() => {
    const element = ref.current;
    ////
    const mq = window.matchMedia("(max-width: 48em)");
    const t1 = gsap.timeline({
      scrollTrigger: {
        trigger: document.getElementById("services"),

        start: "top top+=180",

        end: "bottom bottom",

        pin: element,
        pinReparent: true,
      },
    });

    revealRefs.current.forEach((el, index) => {
      // console.log(el.childNodes);
      if (mq.matches) {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=200",
              end: "bottom bottom-=100",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=300",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      } else {
        t1.from(
          el.childNodes[0],

          {
            x: -300,
            opacity: 0,
            duration: 2,

            ease: "power2",
            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el,
              start: "top center+=100",
              end: "bottom bottom-=200",
              scrub: true,
              snap: true,
              //
              // toggleActions: "play none none reverse",
            },
          }
        )
          .to(el.childNodes[1], {
            transform: "scale(0)",

            ease: "power2.inOut",

            scrollTrigger: {
              id: `section-${index + 1}`,
              trigger: el.childNodes[1],
              start: "top center",
              end: "bottom center",
              scrub: true,
              snap: true,

              // toggleActions: "play none none reverse",
            },
          })
          .from(
            el.childNodes[2],

            {
              y: 400,

              duration: 2,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top center+=100",
                end: "bottom bottom-=200",
                scrub: true,
                snap: true,
                //
                // toggleActions: "play none none reverse",
              },
            }
          )
          .to(
            el,

            {
              opacity: 0,

              ease: "power2",
              scrollTrigger: {
                id: `section-${index + 1}`,
                trigger: el,
                start: "top top+=200",
                end: "center top+=300",
                scrub: true,
              },
            }
          );
      }
    });
  }, []);


  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const isMobile = window.matchMedia("(max-width: 48em)").matches;

  return (
    <ServiceSection id="services">
      <Background ref={ref}>
        <Title className="title">Qué ofrezco</Title>
        <Triangle id="triangle" isMobile={isMobile} />
      </Background>

      <Content ref={addToRefs}>
        <TextBlock
          topic="Desarrollo Full Stack"
          title={<h1>Desarrollo Full Stack</h1>}
          subText={
            <NeonSubText>
              Desarrollo de soluciones completas, desde el frontend hasta el backend, utilizando tecnologías como React, Node.js, MongoDB y MySQL para crear aplicaciones web y móviles robustas y escalables.
            </NeonSubText>
          }
        />
        {!isMobile && (
          <OBJ>
            <img src={Tube} alt="Tube Object" width="400" height="400" />
          </OBJ>
        )}
        <SvgBlock svg="Design.svg" />
      </Content>
      <Content ref={addToRefs}>
        <TextBlock
          topic="Integración de Arte y Tecnología"
          title={<h1>Integración de Arte y Tecnología</h1>}
          subText={
            <NeonSubText>
              Fusión de creatividad y desarrollo, explorando nuevas formas de conectar el arte con la tecnología IA para crear experiencias únicas y cautivadoras.
            </NeonSubText>
          }
        />
        {!isMobile && (
          <OBJ>
            <img src={Cone} alt="Cone Object" width="400" height="400" />
          </OBJ>
        )}
        <SvgBlock svg="Develope.svg" />
      </Content>
      <Content className="flex relative items-center">
  <TextBlock
    topic="Impulso de Experiencia de Usuario"
    title={<h1>Experiencia de Usuario</h1>}
    subText={
      <NeonSubText>
        ¡Desata el potencial! Comprometido con la excelencia en la experiencia del usuario, brindo diseños UX realizados con Figma, Adobe Photoshop, Canvas y otras herramientas para que tus soluciones digitales superen tus expectativas.
      </NeonSubText>
    }
  />
  {!isMobile && (
    <div className="flex-shrink-0 ml-[-0.5rem]">
      <img src={Capsule} alt="Capsule Object" className="w-56 h-56" />
    </div>
  )}
</Content>




    </ServiceSection>
  );
};

export default Services;
