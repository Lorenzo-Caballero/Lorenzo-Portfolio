import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"
import { skills } from '../utils/utils';
import { IconJs, IconReact, IconMongoDB, IconHtml5, IconCss3, IconTailwindCSS, 
  IconExpress, IconHuggingFace, IconSql, IconBootstrap, IconSass, IconNodejs, IconFigma,
  IconPhp, IconLaravel, IconTypescript } from "./Icons";

export const Skills = ({language}) => {
  const items = [
    { icon: <IconJs />, label: 'Javascript' },
    { icon: <IconReact />, label: 'React' },
    { icon: <IconTypescript />, label: 'Typescript' },
    { icon: <IconHtml5 />, label: 'Html' },
    { icon: <IconCss3 />, label: 'Css' },
    { icon: <IconSass />, label: 'SASS' },
    { icon: <IconTailwindCSS />, label: 'Tailwind CSS' },
    { icon: <IconBootstrap />, label: 'Bootstrap' },
    { icon: <IconFigma />, label: 'Figma' },
    { icon: <IconNodejs />, label: 'Node js' },
    { icon: <IconHuggingFace />, label: 'HuggingFace' },
    { icon: <IconMongoDB />, label: 'MongoDB' },
    { icon: <IconExpress />, label: 'Express' }
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>{skills[language].title}</h2>
              <p>{skills[language].description[0]}<br></br><b>{skills[language].description[1]}</b></p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
                customTransition="transform 500ms ease-in-out"
                autoPlay={true}
                autoPlaySpeed={1000}>
                {items.map((item, index) => (
                  <div key={index} className={``}>
                    {item.icon}
                    <h5>{item.label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
