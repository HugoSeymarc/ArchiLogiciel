import React from 'react';
import { Row, Col } from 'react-bootstrap';

const Header = (props) => {

    return(
        <>
            <Row>
                <Col>
                    <p>{props.balance}$</p>
                </Col>
                <Col>
                    <p>{props.title}</p>
                </Col>
                <Col>
                    <p>{props.user}</p>
                </Col>
            </Row>
        </>
    );    
};

export default Header;