import React from "react";
import Button from "../Button";


const TableRowBuy = ({ data }) => {
    return (
        <tr>
            <td key={data}>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.type}</td>
            <td>{data.pv}</td>
            <td>{data.price}</td>
            <td><Button title={"Buy"} href={`/buy`}/></td>
        </tr>
    );
};

export default TableRowBuy;