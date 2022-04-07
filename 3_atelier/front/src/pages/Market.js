import React from 'react';
import Button from '../components/Button';


const Market = () => {
    return (
        <>
            <p>Market</p>
            <Button title={"BUY"} color={"lightgrey"}  width={"25%"} height={"200px"} icon={process.env.PUBLIC_URL + "./logo192.png"} iconWidth={"15%"}/>
            <Button title={"PLAY"} color={"lightgrey"} width={"25%"} height={"200px"} icon={process.env.PUBLIC_URL + "./logo192.png"} iconWidth={"15%"}/>
            <Button title={"SELL"} color={"lightgrey"} width={"25%"} height={"200px"} icon={process.env.PUBLIC_URL + "./logo192.png"} iconWidth={"15%"}/>
        </>
    );
};

export default Market;
