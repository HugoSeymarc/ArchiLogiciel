import React from 'react';
import Table from '../components/buyTable/Table';
import Header from '../components/Header';
import { Modal, Button, Form } from 'react-bootstrap';
import {useEffect} from "react";



const fetchData = () => {
    return fetch("http://localhost:8085/cards")
          .then((response) => response.json())
          .then((data) => console.log("TETETETETETES",data));}

const headData = ["Id","Name", "Description", "Type","PV","Price"]
const bodyData = [
    { 
        "id": "1", 
        "name": "Salamèche", 
        "description": "La flamme qui brûle au bout de sa queue indique l'humeur de ce Pokémon", 
        "type": "Feu",
        "pv":"80",
        "price":"750"
    }, 
    { 
        "id": "2",
        "name": "Carapuce", 
        "description": "Carapuce est une petite tortue bipède de couleur bleue. Il possède une carapace brune au pourtour blanc, beige au niveau du ventre",
        "type": "Eau",
        "pv":"60",
        "price":"700" 
    },
    { 
        "id": "3", 
        "name": "Bulbizarre", 
        "description": "Bulbizarre est un petit quadrupède vert avec une tête large. Il porte un bulbe sur son dos.", 
        "type": "Plante",
        "pv":"50",
        "price":"675"
    }, 
    { 
        "id": "4", 
        "name": "Pikachu", 
        "description": "Pika-Pika", 
        "type": "Electrique",
        "pv":"70",
        "price":"725"
    }]

const Buy = () => {
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(() => {
        fetchData();
        }, []);
        
    return (
        <>
            <Header title="Buy"/>
            <Table head={headData} body={bodyData} />
            <Button variant="primary" onClick={() => setModalShow(true)}>Create Room</Button>
        </>
    );
};

export default Buy;