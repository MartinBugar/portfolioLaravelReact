import {Container, Row, Col, Tab, Nav} from "react-bootstrap";
import {ProjectCard} from "./ProjectCard";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";
import youtube1 from "../../assets/img/youtube1.png";
import expersoft from "../../assets/img/Expersoft.png";
import gadrilling from "../../assets/img/GADRILLING.png";
import interviewQ from "../../assets/img/interviewQ.png";
import javaForBe from "../../assets/img/javaforbegginers.png";

import colorSharp2 from "../../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';
import {YoutubeCard} from "./YoutubeCard";
import {WorkCard} from "./WorkCard";

export const Projects = () => {

    const works = [
        {
            title: "Expersoft systems",
            description: "Java Developer",
            imgUrl: expersoft,
        },
        {
            title: "GA Drilling",
            description: "Design & Development",
            imgUrl: gadrilling,
        },
    ];

    const youtube = [
        {
            title: "FULL STACK course",
            description: "Java, React, MySql",
            imgUrl: youtube1,
            webUrl: "https://youtu.be/sHmBGtqJPyA?list=PL6MVIumjKqoPdkmfFq9524smQwB26QiFS",
        },
        {
            title: "Interview Questions",
            description: "JAVA",
            imgUrl: interviewQ,
            webUrl: "https://youtu.be/6lf336mrkKk?list=PL6MVIumjKqoOCk621DinF7i1BAdrxXHsc",
        },
        {
            title: "JAVA FOR BEGINNERS",
            description: "course",
            imgUrl: javaForBe,
            webUrl: "https://youtu.be/32-ZIFrz_64?list=PL6MVIumjKqoO2BZwmyCCrNBTtse42T-9l",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
            webUrl: "https://youtu.be/sHmBGtqJPyA?list=PL6MVIumjKqoPdkmfFq9524smQwB26QiFS",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
            webUrl: "https://youtu.be/sHmBGtqJPyA?list=PL6MVIumjKqoPdkmfFq9524smQwB26QiFS",
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
            webUrl: "https://youtu.be/sHmBGtqJPyA?list=PL6MVIumjKqoPdkmfFq9524smQwB26QiFS",
        },
    ];

    const projects = [
        {
            title: "Finance Management",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Business Startup",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className="animate__animated">
                                    <h2>Projects and Development</h2>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills"
                                             className="nav-pills mb-5 justify-content-center align-items-center"
                                             id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Jobs</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Youtube</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Projects</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className="animate__animated">
                                            <Tab.Pane eventKey="second">
                                                <p>Recording tutorials</p>
                                                <Row>
                                                    {
                                                        youtube.map((youtube, index) => {
                                                            return (
                                                                <YoutubeCard
                                                                    key={index}
                                                                    {...youtube}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="first">
                                                <p>
                                                    Job Adventures: Experience from My Professional Voyage of programmer
                                                </p>

                                                <Row>
                                                    {
                                                        works.map((work, index) => {
                                                            return (
                                                                <WorkCard key={index}{...work}/>
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}
