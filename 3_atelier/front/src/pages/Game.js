import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import TableRowGame from '../components/TableRowGame';


const headData = ["Name", "Description", "Familly", "Affinity", "Energy", "HP"]
const bodyData = [{ "name": "salamèche", "description": "Ce truc est un pokemon ", "familly": "Feu", "affinity":"5", "energy":"100", "hp":"15" }]

const Game = (props) => {

    return (
        <>  
            <Header/>
            <Table head={headData} body={bodyData}/>
        </>
    );
};

export default Game;