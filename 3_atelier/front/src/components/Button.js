import React from 'react';
import { Button } from 'react-bootstrap';

const ButtonCustom = (props) => {

    console.log(props)

    return (
        <>
            <Button variant="light">
                {props.title}
            </Button>
        </>
    );
};

export default ButtonCustom;