import React from 'react';

const Button = (props) => {

    console.log(props)

    return (
        <>
            <button style={{backgroundColor:props.color, width: props.width, height: props.height}}>
                <img src={props.icon} width={props.iconWidth}/>
                {props.title}
            </button>
        </>
    );
};

export default Button;