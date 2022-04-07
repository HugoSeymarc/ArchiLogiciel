import React from "react";


const TableRow = ({ data }) => {
    console.log("duTexte",data)
    return (
        <tr>
            <td key={data}>{data.id}</td>
            <td>{data.room}</td>
            <td>{data.bet}</td>
            <td>Button</td>
        </tr>
    );
};

export default TableRow;