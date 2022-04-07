import React from 'react';
import Table from 'react-bootstrap/Table'
import TableHead from './TableHead';
import TableRow from './TableRowPlay';


const TableRoomList = ({ head, body }) => {

    console.log(head)
    console.log(body)

    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        {head.map((item) => {
                            console.log('JE SUIS LAAAfdzefzefzefzfzefzefzfAAA', item)
                            return <TableHead key={item} data={item} />
                        })}
                    </tr>
                </thead>
                <tbody>
                    {body.map((item) => {
                        // console.log('JE SUIS LAAAAAA', item)
                        return <TableRow key={item.id} data={item} />
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default TableRoomList;