import React from "react";
import Button from "./Button";


const TableRowGame = ({ data }) => {
    return (
        <tr>
            <td key={data}>{data.id}</td>
            <td>{data.room}</td>
            <td>{data.bet}</td>
            <td><Button title={"Play"} href={`/game`}/></td>
        </tr>
    );
};

export default TableRowGame;