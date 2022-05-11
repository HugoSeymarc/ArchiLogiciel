import React from 'react';
import Table from '../components/Table';
import { Modal, Button, Form } from 'react-bootstrap';
import Header from '../components/Header';

const headData = ["Room", "User", "Bet", "GO"]
const bodyData = [{ "id": "A", "room": "Steph", "bet": "350" }, { "id": "B", "room": "Antoine", "bet": "50" }, { "id": "C", "room": "Jackson", "bet": "150" }, { "id": "D", "room": "Peter", "bet": "250" }]

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
            <p>Market</p>
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
