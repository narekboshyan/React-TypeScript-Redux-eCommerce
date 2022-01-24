import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

interface IFormContainerProps {}

const FormContainer: React.FC<IFormContainerProps> = ({ children }) => {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={6}>
                    {children}
                </Col>
            </Row>
        </Container>
    );
};

export default FormContainer;
