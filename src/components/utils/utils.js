import logo from '../../assets/img/logo.png';
import linkedinIcon from '../../assets/img/linkedin.svg';
import FbIcon from '../../assets/img/fb.svg';
import GitHubIcon from '../../assets/img/gitHubIcon.svg';
import es from '../../assets/img/flag-es.svg';
import pt from '../../assets/img/flag-bra.svg';
import us from '../../assets/img/flag-us.svg';
import projImg1 from "../../assets/img/projecto1.png";
import projImg2 from "../../assets/img/projecto2.png";
import flame from "../../assets/img/projecto7.jpg";
export const particlesData = {
  "particles": {
    "number": {
      "value": 80,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.5,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 6,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "repulse"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 400,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true,
  "config_demo": {
    "hide_card": false,
    "background_color": "#b61924",
    "background_image": "",
    "background_position": "50% 50%",
    "background_repeat": "no-repeat",
    "background_size": "cover"
  }
}

export const MediaIcon = {
  GitHubIcon,
  linkedinIcon,
  FbIcon,
  logo,
  es,
  pt,
  us
}

export const projectsDescription = {
  "es": [
    {
      title: "Aoki Tech",
      description: "Full Stack Developer",
      subDescription: "Participe en aplicaciones de tipo CRMs,E-commerce,ChatBot IA"
    },
    {
      title: "Digital Core",
      description: "Full Stack Developer",
      subDescription: "Cree Base de datos SQL ,Autentificacion de usuario , diseñe y cree Templates con Bootstrap , React y Css "
    },
    {
      title: "Freelance",
      description: "Full Stack Developer",
      subDescription: "Modelacion y creacion de Base de datos SQL , y diseño de interfaces con Bootstrap "
    }
  ], "pt": [
    {
      title: "Aoki Tech",
      description: "Desenvolvedor Full Stack",
      subDescription: "Participei em aplicações tipo CRMs, E-commerce, ChatBot IA"
    },
    {
      title: "Digital Core",
      description: "Desenvolvedor Full Stack",
      subDescription: "Criei banco de dados SQL, Autenticação de usuário, projetei e criei Templates com Bootstrap, React e Css"
    },
    {
      title: "Freelance",
      description: "Desenvolvedor Full Stack",
      subDescription: "Modelagem e criação de banco de dados SQL, e design de interfaces com Bootstrap, React e Css"
    }
  ],
  "en": [
    {
      title: "Aoki Tech",
      description: "Full Stack Developer",
      subDescription: "Participated in CRMs, E-commerce, ChatBot IA type applications"
    },
    {
      title: "Digital Core",
      description: "Full Stack Developer",
      subDescription: "Created SQL database, User authentication, designed and created Templates with Bootstrap, React, and Css"
    },
    {
      title: "Freelance",
      description: "Full Stack Developer",
      subDescription: "Modeling and creation of SQL database, and interface design with Bootstrap, React, and Css"
    }
  ]
}
export const projectsTitle = {
  "es":
  {
    title: "Experiencia Laboral",
    description: "Cada experiencia es una oportunidad para crecer, explorar tecnologías nuevas, implementar mejores prácticas y agregar valor con soluciones innovadoras. Mi objetivo es seguir creciendo y contribuir al éxito de proyectos desafiantes en el futuro."
  },

  "pt":
  {
    title: "Experiência Profissional",
    description: "Cada experiência é uma oportunidade para crescer, explorar novas tecnologias, implementar melhores práticas e agregar valor com soluções inovadoras. Meu objetivo é continuar crescendo e contribuir para o sucesso de projetos desafiadores no futuro."
  },

  "en":
  {
    title: "Work Experience",
    description: "Each experience is an opportunity to grow, explore new technologies, implement best practices, and add value with innovative solutions. My goal is to keep growing and contribute to the success of challenging projects in the future."
  }
}

export const skills = {
  "es":
  {
    title: "Herramientas",
    description: ["Tener herramientas de trabajo destacadas es beneficioso porque te ayuda a,", "diferenciarte, demostrar relevancia, construir credibilidad, aumentar tu visibilidad y mantener un enfoque claro en tu desarrollo profesional."]
  },
  "pt":
  {
    title: "Ferramentas",
    description: ["Ter ferramentas de trabalho destacadas é benéfico porque ajuda a diferenciar-se,", "demonstrar relevância, construir credibilidade, aumentar sua visibilidade e manter um foco claro no seu desenvolvimento profissional."]
  }
  ,
  "us":
  {
    title: "Tools",
    description: ["Having standout tools is beneficial because it helps you,", "differentiate yourself, demonstrate relevance, build credibility, increase your visibility, and maintain a clear focus on your professional development."]
  }
}

export const projectImages = [projImg1, projImg2, flame]

export const initialDescription = {
  "es": { tag: "Bienvenido a mi Portfolio", title: "Hola! Soy Lorenzo Caballero", description: "Soy un desarrollador web apasionado por crear experiencias digitales increíbles. A lo largo de los años, he trabajado arduamente para perfeccionar mis habilidades y ofrecer soluciones creativas y efectivas para mis clientes. ¡Contáctame para discutir tus ideas y proyectos - estoy deseando trabajar juntos!", contact: "Contactame" },
  "pt": { tag: "Bem-vindo ao meu Portfolio", title: "Olá! Eu sou Lorenzo Caballero", contact: "Contate-me", description: "Sou um desenvolvedor web apaixonado por criar experiências digitais incríveis. Ao longo dos anos, tenho trabalhado arduamente para aprimorar minhas habilidades e oferecer soluções criativas e eficazes para meus clientes. Entre em contato comigo para discutir suas ideias e projetos - estou ansioso para trabalhar juntos!" },
  "us": { tag: "Welcome to my Portfolio", contact: "Contact Me", title: "Hi! I'm Lorenzo Caballero", description: "I'm a web developer passionate about creating amazing digital experiences. Over the years, I've worked hard to hone my skills and deliver creative and effective solutions for my clients. Get in touch with me to discuss your ideas and projects - I'm looking forward to working together!", }
}

export const navBarTag = {
  "es": { inicio: "Inicio", habilidades: "Habilidades", proyectos: "Proyectos", work: "Trabajemos Juntos" },
  "pt": { inicio: "Início", habilidades: "Habilidades", proyectos: "Projetos", work: "Vamos trabalhar juntos" },
  "us": { inicio: "Home", habilidades: "Skills", proyectos: "Projects", work: "Let's work together" }
}

export const contactFormLabels = {
  "es": { contacto: "Contacto", nombre: "Nombre", email: "Correo Electrónico", mensaje: "Mensaje", derechos: "Todos los derechos reservados" },
  "pt": { contacto: "Contate-nos", nombre: "Nome", email: "E-mail", mensaje: "Mensagem", derechos: "Todos os direitos reservados" },
  "us": { contacto: "Contact Us", nombre: "Name", email: "Email", mensaje: "Message", derechos: "All rights reserved" }
}

export const contactFormMessages = {
  "es": {
    enviando: "Enviando...",
    exito: "El mensaje se envió correctamente",
    error: "Algo salió mal. Intente de nuevo más tarde.",
    enviar: "Enviar",
    completarCampos: "Por favor complete todos los campos obligatorios."
  },
  "pt": {
    enviando: "Enviando...",
    exito: "A mensagem foi enviada com sucesso",
    error: "Algo deu errado. Tente novamente mais tarde.",
    enviar: "Enviar",
    completarCampos: "Por favor, preencha todos os campos obrigatórios."
  },
  "us": {
    enviando: "Sending...",
    exito: "Message sent successfully",
    error: "Something went wrong. Please try again later.",
    enviar: "Send",
    completarCampos: "Please complete all required fields."
  }
}