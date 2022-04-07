import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';


const headData = ["Name", "Description", "Familly", "Affinity", "Energy", "HP"]
const bodyData = [{ "id": "A", "room": "Steph", "bet": "350" }, { "id": "B", "room": "Antoine", "bet": "50" }, { "id": "C", "room": "Jackson", "bet": "150" }, { "id": "D", "room": "Peter", "bet": "250" }]

const Game = (props) => {

    return (
        <>  
            <Header/>
            <Table head={headData} body={bodyData} />
        </>
    );
};

export default Game;