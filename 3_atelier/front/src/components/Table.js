import React from 'react';
import Table from 'react-bootstrap/Table'
import TableRow from './TableRow';


const TableRoomList = ({head, body}) => {

    console.log(head)   
    console.log(body)

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>{head[0]}</th>
                        <th>{head[1]}</th>
                        <th>{head[2]}</th>
                        <th>{head[3]}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {body.map((item) => { 
                            return <TableRow key={item} data={item}/>

                        })}
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default TableRoomList;

// const cards = [
//     { id: 12, name: "Item 12", price: 12.5 },
//     { id: 13, name: "Item 13", price: 13.5 },
//     { id: 14, name: "Item 14", price: 14.5 }
// ];


// const selectRow = { mode: 'radio', clickToSelect: true };


// const Table = selectedRow => {
//     return [
//         {
//             dataField: 'id', text: 'Card ID', formatExtraData: {
//                 selectedRow
//             },
//         },
//         {
//             dataField: 'name', text: 'Card Name', formatExtraData: {
//                 selectedRow
//             },
//         },
//         {
//             dataField: 'price', text: 'Card Price', formatExtraData: {
//                 selectedRow
//             },
//         }];
// };




{/* < BootstrapTable
    keyField='id'
    data={products}
    columns={columns}
    selectRow={selectRow}
/> */}

