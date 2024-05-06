import { Container, Row, Col } from "react-bootstrap";
//import { MailchimpForm } from "./MailchimpForm";
import { MediaIcon, contactFormLabels } from "../utils/utils";


export const Footer = ({language}) => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={MediaIcon.logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/lorenzo-caballero-fernandez/" target="_blank"><img src={MediaIcon.linkedinIcon} alt="Icon" /></a>
              {/* <a href="#" target="_blank"><img src={fbIcon} alt="Icon"/></a> */}
              <a href="https://github.com/Lorenzo-Caballero"target="_blank" ><img src={MediaIcon.GitHubIcon} alt="Icon" /></a>
            </div>
            <p>Copyright 2024. {contactFormLabels[language].derechos}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
