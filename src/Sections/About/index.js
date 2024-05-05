import styled, { keyframes } from "styled-components";
import wave from "../../assets/waves.svg";
import rocket from "../../assets/rocket image.png";
import human from "../../assets/human.svg";
import hand from "../../assets/hand.svg";

const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;

const AboutSection = styled.section`
  width: 100vw;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Waves = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: -1rem;
`;
const Hand = styled.div`
  position: absolute;
  bottom: -1rem;
  right: 0;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;

const Main = styled.div`
  margin: 0 15rem;
  margin-top: 15rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media only Screen and (max-width: 64em) {
    margin: 0 calc(5rem + 5vw);
    margin-top: 10rem;
  }
  @media only Screen and (max-width: 40em) {
    align-items: center;
    margin: 3rem calc(3rem + 3vw);
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  display: inline-block;
`;

const CurvedLine = styled.div`
  width: 7rem;
  height: 2rem;
  border: solid 5px var(--purple);
  border-color: var(--purple) transparent transparent transparent;
  border-radius: 150%/60px 70px 0 0;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only Screen and (max-width: 40em) {
    flex-direction: column;
  }
`;
// Define el componente Rocket
const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40%;
  animation: ${move} 2.5s ease infinite;

  // Hace que el contenedor sea un círculo perfecto
  border-radius: 100%; /* Ajustado para hacer un círculo perfecto */


  // Establece un tamaño máximo para el contenedor (para garantizar que sea un círculo perfecto)
  max-width: 100%;
  max-height: 100%;

  // Aplica estilos adicionales según el tamaño de la pantalla
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }

  // Establece el tamaño de la imagen igual al tamaño del contenedor y agrega el efecto de sombra estilo neon
  img {
    width: 100%;
    height: 100%;
    object-fit: cover; // Para asegurarse de que la imagen cubra todo el espacio sin distorsión
    // Agrega el efecto de sombra estilo neon con la propiedad drop-shadow
    filter: drop-shadow(0 0 20px rgba(138, 43, 226, 0.5))
            drop-shadow(0 0 40px rgba(138, 43, 226, 0.5))
            drop-shadow(0 0 60px rgba(138, 43, 226, 0.5))
            drop-shadow(0 0 80px rgba(138, 43, 226, 0.5));
  }
`;


const Human = styled.div`
  width: 50%;
  position: absolute;
  right: 0;
  bottom: 100%;

  @media only Screen and (max-width: 40em) {
    display: none;
  }
`;
const Text = styled.h4`
  font-size: calc(0.5rem + 1vw);
  line-height: 1.5;
  color: var(--nav2);
`;
const Circle = styled.span`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: black;
  margin-right: 0.5rem;
  margin-top: 1rem;
`;
const AboutText = styled.div`
  width: 50%;
  position: relative;
  @media only Screen and (max-width: 40em) {
    width: 100%;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Waves src={wave} alt="" />
      <Hand>
        <img src={hand} alt="" />
      </Hand>
      <Main>
        <div>
          <Title>Sobre Mi</Title>
          <CurvedLine />
        </div>
        <Content>
          <Rocket>
            <img src={rocket} alt="" width="400" height="400" />
          </Rocket>
          <AboutText>
            <Human>
              <img src={human} alt="" width="400" height="400" />
            </Human>

            <Text>
              Soy un desarrollador activo y creativo, un viajero en busca de nuevas experiencias y tecnologías, busco fusionar mis dos pasiones... (arte y el desarrollo de software) hacer que el arte se conecte con la tecnología de una manera orgánica e innovadora.
              ¡Además de programador soy tatuador, el arte me ayuda a abstraerme y también a darle un respiro a mi cerebro!
            </Text>
            <div>
              <Circle style={{ backgroundColor: "var(--purple)" }} />
              <Circle style={{ backgroundColor: "var(--pink)" }} />
              <Circle style={{ backgroundColor: "var(--black)" }} />
            </div>
          </AboutText>
        </Content>
      </Main>
    </AboutSection>
  );
};

export default About;
