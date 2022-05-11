import React from 'react';
import Table from 'react-bootstrap/Table'
import TableHead from './TableHead';
import TableRow from './TableRowGame';


const TableRoomList = ({ head, body }) => {

    console.log(head)
    console.log(body)

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {head.map((item) => {
                            return <TableHead key={item} data={item} />
                        })}
                    </tr>
                </thead>
                <tbody>
                    {body.map((item) => {
                        return <TableRow key={item} data={item} />
                    })}
                </tbody>
            </Table>    
        </>
    );
};

export default TableRoomList;

