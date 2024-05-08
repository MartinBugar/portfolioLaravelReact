import {Col} from "react-bootstrap";

export const WorkCard = ({title, description, imgUrl}) => {
    return (
        <Col size={12} xl={6} lg={12} md={12} sm={12}>
            <div className="work-imgbx">
                <img src={imgUrl}/>
            </div>
        </Col>
    )
}
