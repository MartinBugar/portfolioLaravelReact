import {useState, useEffect} from "react";
import {Container, Row, Col} from "react-bootstrap";
import headerImg from "../../assets/img/header-img.svg";
import {ArrowRightCircle} from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';
import {HashLink} from "react-router-hash-link";
import {
    BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Java developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = "Java developer";
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        } else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="aligh-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className="animate__animated">
                                    <span className="tagline">Welcome to my Portfolio</span>
                                    <h1>{`Hi! I'm Martin, Java Developer`} </h1>
                                    <p>
                                        I consider myself an experienced and skilled Java backend developer with a knack
                                        for crafting robust, efficient systems.
                                        <br></br>
                                        My expertise extends beyond Java to include SQL for database management and
                                        Vue.js or Vaadin for dynamic user interfaces.
                                        <br></br>
                                        I thrive in the intricate world of backend development, seamlessly integrating
                                        technologies to create powerful and responsive applications.
                                    </p>
                                    <Router>
                                        <HashLink to='#connect' className="buttonLets">
                                            <button onClick={() => console.log('connect')}>Let’s
                                                Connect <ArrowRightCircle
                                                    size={25}/></button>
                                        </HashLink>
                                    </Router>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className="animate__animated ">
                                    <img src={headerImg} alt="Header Img"/>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
