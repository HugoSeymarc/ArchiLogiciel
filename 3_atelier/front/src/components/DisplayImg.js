import React from 'react';
import Figure from 'react-bootstrap/Figure'

const DisplayImg = (props) => {

    return (
        <>
            <div style={{width:"300px", height:"350px"}}>
                <Figure>
                    <Figure.Image
                        width={props.width}
                        height={props.height}
                        src={props.url}
                        alt="img"
                    />
                    <Figure.Caption>
                        {props.title}
                    </Figure.Caption>
                </Figure>
            </div>
            

        </>
    );
};

export default DisplayImg;