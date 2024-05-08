import {useState, useEffect} from "react";
import {Col, Row, Alert} from "react-bootstrap";

export const Newsletter = ({status, message, onValidated}) => {
    const [email, setEmail] = useState('');

    useEffect(() => {
        if (status === 'success') clearFields();
    }, [status])

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email
        })
    }

    const clearFields = () => {
        setEmail('');
    }

    return (
        <Col lg={12}>
            <div className="newsletter-bx wow slideInUp">
                <Row>
                    <Col>
                        <h3>Motto :<br>
                        </br>Hard work beats talent,<br/> when talent doesn't work hard</h3>
                    </Col>
                </Row>
            </div>
        </Col>
    )
}
