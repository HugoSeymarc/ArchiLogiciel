import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

const Market = () => {
    return (
        <>
            <Header balance={5000} user={"Joe"}/>
            <p>Market</p>
            <Button title={"BUY"} onClick={ navigation(`/buy`)}/>
            <Button title={"SELL"} onClick={ navigation(`/sell`)}/>
            <Button title={"PLAY"} onClick={ navigation(`/game`)}/>
        </>
    );
};

export default Market;
