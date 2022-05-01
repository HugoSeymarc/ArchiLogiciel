import React from "react";


const TableHead = ({ data }) => {
    console.log('fgezgergergergergergergegr', data)
    return (
        <td title={data}>
            {data}
        </td>
    );
};

export default TableHead;