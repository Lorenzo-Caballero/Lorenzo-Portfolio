// Card.js
import styled from "styled-components";
import { motion } from "framer-motion";

const CardContainer = styled(motion.div)`
  position: relative;
`;

const CARD = styled(motion.div)`
  height: calc(8rem + 12vw);
  width: calc(9rem + 12vw);
  background-color: var(--nav2);
  border-radius: 20px;
  position: relative;
  margin-top: calc(5rem + 5vw);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TEXT = styled.h4`
  color: var(--white);
  padding: 0 calc(1rem + 1vw);
  text-align: center;
  font-size: calc(0.6rem + 0.5vw);
`;

const NAME = styled(motion.h3)`
  color: #8a2be2;
  position: absolute;
  top: -3rem; /* Ajusta según necesites */
  left: 50%;
  transform: translateX(-50%);
  font-size: calc(0.5rem + 1vw);
  text-align: center;
  text-shadow: 0 0 10px #8a2be2, 0 0 20px #8a2be2, 0 0 30px #8a2be2;
`;

const Card = ({ name, text }) => {
  return (
    <CardContainer
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <NAME>{name}</NAME>
      <CARD>
        <TEXT>{text}</TEXT>
      </CARD>
    </CardContainer>
  );
};

export default Card;
