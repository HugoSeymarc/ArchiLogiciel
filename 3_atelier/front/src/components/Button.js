import React from 'react';

const Button = (props) => {

    console.log(props)

    return (
        <>
            <button>
                {props.title}
            </button>
        </>
    );
};

export default Button;