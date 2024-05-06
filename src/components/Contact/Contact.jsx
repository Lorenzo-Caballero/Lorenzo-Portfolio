import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import headerImg from "../../assets/img/space-man.svg";
import emailjs from "@emailjs/browser"
import { contactFormLabels, contactFormMessages } from "../utils/utils";

export const Contact = ({language}) => {

  const serviceID = import.meta.env.VITE_MAILJS_ID
  const templateID = import.meta.env.VITE_MAILJS_TEMPLATE
  const keyID = import.meta.env.VITE_MAILJS_PUBLIC_ID
  const refForm = useRef(null)

  const formInitialDetails = {
    username: '',
    email: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState(contactFormMessages[language].enviar);
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setStatus({})
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Object.values(formDetails).some(value => !value.trim())) {
      setStatus({ success: false, message: contactFormMessages[language].completarCampos });
      return;
    }
    setButtonText(contactFormMessages[language].enviando);
    emailjs.sendForm(serviceID, templateID, refForm.current, keyID)
      .then(result => {
        if (result.status == 200) {
          setStatus({ succes: true, message: contactFormMessages[language].exito });
        } else {
          setStatus({ succes: false, message: contactFormMessages[language].error });
        }
        setButtonText(contactFormMessages[language].enviar);
        setFormDetails(formInitialDetails);
        refForm.current = null
      })
      .catch(err => {
        console.error(err)
        refForm.current = null
        setButtonText("Enviar");
        setFormDetails(formInitialDetails);
      })
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={headerImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>{contactFormLabels[language].contacto}</h2>
                  <form onSubmit={handleSubmit} ref={refForm}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input type="text" name="username" value={formDetails.username} placeholder={contactFormLabels[language].nombre} onChange={(e) => onFormUpdate('username', e.target.value)} />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input type="email" name="email" value={formDetails.email} placeholder={contactFormLabels[language].email} onChange={(e) => onFormUpdate('email', e.target.value)} />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea rows="6" name="message" value={formDetails.message} placeholder={contactFormLabels[language].mensaje} onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                        <div className="submitButton"><button type="submit"><span>{buttonText}</span></button></div>
                      </Col>
                    </Row>
                    {
                      status.message &&
                      <Row>
                        <Col size={12} className="px-1">
                          <p className={status.success === false ? "danger" : "success"} style={{ textAlign: 'end' }}>{status.message}</p>
                        </Col>
                      </Row>
                    }
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
