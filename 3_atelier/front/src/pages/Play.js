import React from 'react';
import Table from '../components/playTable/Table';
import { Modal, Button, Form } from 'react-bootstrap';
import Header from '../components/Header';

const headData = ["Room","Create by", "Bet"]
const bodyData = [
    { 
        "room":"Room1",
        "user":"Steph", 
        "bet": "400" 
    },
    { 
        "room":"Room2",
        "user":"Antoine", 
        "bet": "250" 
    },
    { 
        "room":"Room3",
        "user":"Patrick", 
        "bet": "550" 
    },
    { 
        "room":"Room4",
        "user":"José", 
        "bet": "350" 
    }]

const MyVerticallyCenteredModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Room creation
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label htmlFor="name">Name</Form.Label>
                <Form.Control
                    type="text"
                    id="name"
                />
                <Form.Label htmlFor="bet">Bet</Form.Label>
                <Form.Control
                    type="bet"
                    id="bet"
                />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" type="submit">
                    Create
                </Button>
                <Button onClick={props.onHide}>Cancel</Button>
            </Modal.Footer>
        </Modal>
    );
}

const Market = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
        <>
            <Header title="Play"/>
            <Table head={headData} body={bodyData} />
            <Button variant="primary" onClick={() => setModalShow(true)}>Create Room</Button>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    );
};

export default Market;
