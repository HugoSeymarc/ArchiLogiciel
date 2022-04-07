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
                    {body.map((item) => { 
                        return <TableRow key={item} data={item}/>
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default TableRoomList;