import React from "react";
import Button from "../Button";


const TableRowGame = ({ data }) => {
    return (
        <tr>
            <td key={data}>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.type}</td>
            <td>{data.pv}</td>
            <td>{data.price}</td>
            <td><Button title={"play"} href={`/game`}/></td>
        </tr>
    );
};

export default TableRowGame;