import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const ButtonCustom = (props) => {
    const navigation = useNavigate();
    console.log(props)

    return (
        <>
            <Button variant="light" onClick={() => navigation(props.href)}>
                {props.title}
            </Button>
        </>
    );
};

export default ButtonCustom;