import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";

import navIcon1 from '../../assets/img/nav-icon1.svg';
import youtube from '../../assets/img/youtube.png';
import git from '../../assets/img/git.png';
import {Newsletter} from "@/Pages/Newsletter";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
            <Newsletter />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/martin-bugar-511a42131/" target="_blank"><img src={navIcon1} alt=""/></a>
              <a href="https://www.youtube.com/@martyx_code" target="_blank"><img src={youtube} alt=""/></a>
              <a href="https://github.com/MartinBugar" target="_blank"><img src={git} alt=""/></a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
