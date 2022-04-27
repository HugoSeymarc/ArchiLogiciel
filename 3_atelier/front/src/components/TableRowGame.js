import React from "react";


const TableRowGame = ({ data }) => {
    return (
        <tr>
            <td key={data}>{data.name}</td>
            <td>{data.description}</td>
            <td>{data.familly}</td>
            <td>{data.affinity}</td>
            <td>{data.energy}</td>
            <td>{data.hp}</td>
        </tr>
    );
};

export default TableRowGame;