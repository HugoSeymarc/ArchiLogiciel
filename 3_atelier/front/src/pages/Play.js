import React from 'react';
import Button from '../components/Button';
import Table from '../components/Table';


const Market = () => {
    return (
        <>
            <p>Market</p>
            <Button title={"BUY"} color={"lightgrey"}  width={"25%"} height={"200px"} icon={process.env.PUBLIC_URL + "./logo192.png"} iconWidth={"15%"}/>
            <Table />
        </>
    );
};

export default Market;
