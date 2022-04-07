import React from 'react';
import Button from '../components/Button';
import Table from '../components/Table';

const headData = ["Room", "User", "Bet", "GO"]
const bodyData = [{"id":"A", "room":"Steph", "bet":"350"}, {"id":"B", "room":"Antoine", "bet":"50"},{"id":"C", "room":"Jackson", "bet":"150"},{"id":"D", "room":"Peter", "bet":"250"}]

console.log(bodyData)
const Market = () => {

    return (
        <>
            <p>Market</p>
            <Table head={headData} body={bodyData}/>
            <Button title={"Create Room"} href={`/game`} color={"light"} width={"15%"} height={"350px"} icon={process.env.PUBLIC_URL + "./logo192.png"} iconWidth={"15%"}/>            
        </>
    );
};

export default Market;
