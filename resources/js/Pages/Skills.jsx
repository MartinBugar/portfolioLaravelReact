import meterJava from "../../assets/img/meterJava87.png";
import SQL80 from "../../assets/img/SQL80.png";
import Vue58 from "../../assets/img/Vue58.png";
import PHP48 from "../../assets/img/PHP48.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../../assets/img/color-sharp.png"

export const Skills = () => {
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
                        <h2>Skills</h2>
                        <p>
                            I consider myself an experienced and skilled Java backend developer with a knack for
                            crafting robust, efficient systems.
                            <br></br>
                            My expertise extends beyond Java to include SQL for database management and Vue.js or Vaadin
                            for dynamic user interfaces.
                            <br></br>
                           I thrive in the intricate world of backend development, seamlessly integrating
                            technologies to create powerful and responsive applications.
                        </p>
                        <Carousel responsive={responsive} infinite={true}
                                  className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meterJava} alt="Image"/>
                                <h5>JAVA</h5>
                            </div>
                            <div className="item">
                                <img src={SQL80} alt="Image"/>
                                <h5>SQL-Oracle, Mysql</h5>
                            </div>
                            <div className="item">
                                <img src={SQL80} alt="Image"/>
                                <h5>Vaadin</h5>
                            </div>
                            <div className="item">
                                <img src={Vue58} alt="Image"/>
                                <h5>Vue js</h5>
                            </div>
                            <div className="item">
                                <img src={PHP48} alt="Image"/>
                                <h5>PHP Laravel</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image"/>
    </section>
  )
}
