import React from 'react';
import Button from '../components/Button';
import Header from '../components/Header';

const Market = () => {
    return (
        <>
            <Header balance={5000} user={"Joe"}/>
            <p>Market</p>
            <Button title={"BUY"} href={`/buy`}/>
            <Button title={"SELL"} href={`/sell`}/>
            <Button title={"PLAY"} href={`/game`}/>
        </>
    );
};

export default Market;
