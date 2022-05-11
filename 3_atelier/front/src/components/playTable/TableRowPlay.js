import React from "react";
import Button from "../Button";


const TableRowBuy = ({ data }) => {
    return (
        <tr>
            <td key={data}>{data.room}</td>
            <td>{data.user}</td>
            <td>{data.bet}</td>
            <td><Button title={"Join"} href={`/game`}/></td>
        </tr>
    );
};

export default TableRowBuy;