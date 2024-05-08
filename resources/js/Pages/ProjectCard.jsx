import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, webUrl }) => {
  return (
      <Col size={12} xl={6} lg={12} md={12} sm={12}>
          <div className="proj-imgbx">
              <img src={imgUrl}/>
              <div className="proj-txtx">
                  <a href={webUrl} className="webUrl" target="_blank">
                      <h4>{title}</h4>
                      <span>{description}</span>
                  </a>
              </div>
          </div>
      </Col>
  )
}
