import React from "react";


const TableHead = ({ data }) => {
    return (
        <td title={data}>
            {data}
        </td>
    );
};

export default TableHead;