import React from 'react';
import { useNavigate } from "react-router-dom";
import CardTab from '../components/CardTab';
import TableHeadItem from '../components/TableHeadItem';
import TableRow from '../components/TableRow';

const Buy = () => {
    const theadData1 = ["Name", "Email", "Date", "Hugo?"];

    const tbodyData1 = [
        {
            id: "1",
            items: ["John", "john@email.com", "01/01/2021", "Non"]
        },
        {
            id: "2",
            items: ["Sally", "sally@email.com", "12/24/2020", "Non"]
        },
        {
            id: "3",
            items: ["Maria", "maria@email.com", "12/01/2020", "Non"]
        },
        {
            id: "4",
            items: ["Hugoooo", "HugoLeBG69@email.com", "01/01/1", "Oui"]
        },
    ]
    return (
        <>
            <CardTab theadData = {theadData1} tbodyData = {tbodyData1}/>

        </>
    );


}


export default Buy;