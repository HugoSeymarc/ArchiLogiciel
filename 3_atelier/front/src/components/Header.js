import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Balance from './Balance';
import User from './User';

const Header = (props) => {

    return(
        <>
            <Row>
                <Col>
                    {/* <p>{props.balance}$</p> */}
                    <Balance/>
                </Col>
                <Col>
                    <p>{props.title}</p>
                </Col>
                <Col>
                    <User/>
                </Col>
            </Row>
        </>
    );    
};

export default Header;