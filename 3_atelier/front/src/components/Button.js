import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

const ButtonCustom = (props) => {
    const navigation = useNavigate();
    console.log(props)

    return (
        <>
            <Button variant={props.color} onClick={() => navigation(props.href)} style={{ width: props.width, height: props.height}}>
                <img src={props.icon} width={props.iconWidth}/>
                {props.title}
            </Button>
        </>
    );
};

export default ButtonCustom;