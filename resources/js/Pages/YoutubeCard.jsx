import {Col} from "react-bootstrap";

export const YoutubeCard = ({title, description, imgUrl, webUrl}) => {
    return (
        <Col size={12} sm={6} md={4}>
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
