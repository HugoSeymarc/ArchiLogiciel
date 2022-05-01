import React from "react";
import Button from "./Button";


const TableRowBuy = ({ data }) => {
    return (
        <tr>
            <td key={data}>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td><Button title={"Join"} href={`/game`}/></td>
        </tr>
    );
};

export default TableRowBuy;