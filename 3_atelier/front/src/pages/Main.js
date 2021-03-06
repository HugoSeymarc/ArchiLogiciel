import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';
import { Row } from 'react-bootstrap';


const Market = () => {
    return (
        <>
            <Header title = "Main"/>
            <Row className={"justify-content-around"}>
                <Button title={"BUY"} href={`/buy`}  color={"light"}  width={"25%"} height={"200px"} icon={process.env.PUBLIC_URL + "./logo192.png"} iconWidth={"15%"}/>
                <Button title={"SELL"} href={`/sell`} color={"light"} width={"25%"} height={"200px"} icon={process.env.PUBLIC_URL + "./logo192.png"} iconWidth={"15%"}/>
                <Button title={"PLAY"} href={`/play`} color={"light"} width={"25%"} height={"200px"} icon={process.env.PUBLIC_URL + "./logo192.png"} iconWidth={"15%"}/>
            </Row>
        </>
    );
};

export default Market;
