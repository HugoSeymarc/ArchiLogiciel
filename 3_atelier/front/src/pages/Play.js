import React from 'react';
import Button from '../components/Button';
import Table from '../components/Table';

const headData = ["Room", "User", "Bet", "GO"]
const bodyData = [{"id":"A", "room":"Steph", "bet":"350"}, {"id":"B", "room":"Antoine", "bet":"50"},{"id":"C", "room":"Jackson", "bet":"150"},{"id":"D", "room":"Peter", "bet":"250"}]

const Market = () => {

    return (
        <>
            <p>Market</p>
            {/* <Button title={"BUY"} color={"lightgrey"}  width={"25%"} height={"200px"} icon={process.env.PUBLIC_URL + "./logo192.png"} iconWidth={"15%"}/> */}
            <Table head={headData} body={bodyData}/>
            
        </>
    );
};

export default Market;
