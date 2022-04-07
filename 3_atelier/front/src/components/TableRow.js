import React from "react";
import Button from "./Button";


const TableRow = ({ data }) => {
    return (
        <tr>
            <td key={data}>{data.id}</td>
            <td>{data.room}</td>
            <td>{data.bet}</td>
            <td><Button title={"Join"}/></td>
        </tr>
    );
};

export default TableRow;