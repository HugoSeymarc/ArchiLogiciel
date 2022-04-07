import BootstrapTable from 'react-bootstrap-table-next';

const cards = [
    { id: 12, name: "Item 12", price: 12.5 },
    { id: 13, name: "Item 13", price: 13.5 },
    { id: 14, name: "Item 14", price: 14.5 }
];


const selectRow = { mode: 'radio', clickToSelect: true };


const Table = selectedRow => {
    return [
        {
            dataField: 'id', text: 'Card ID', formatExtraData: {
                selectedRow
            },
        },
        {
            dataField: 'name', text: 'Card Name', formatExtraData: {
                selectedRow
            },
        },
        {
            dataField: 'price', text: 'Card Price', formatExtraData: {
                selectedRow
            },
        }];
};




{/* < BootstrapTable
    keyField='id'
    data={products}
    columns={columns}
    selectRow={selectRow}
/> */}

export default Table;