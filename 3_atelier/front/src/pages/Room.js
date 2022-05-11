import DisplayImg from '../components/DisplayImg';
import { Button, Col, Row } from 'react-bootstrap';
import Header from '../components/Header';

const teamA = {
    "playerId": "",
    "cardId": "",
}
const teamB = {
    "playerId": "",
    "cardId": "",
}
const room = {
    "roomId": "",
    "name": "",
    "bet": "",
    "player1": "",
    "player2": "",
    "winner": "test"
}



const Room = () => {

    setTimeout(() => {  console.log("World!"); }, 8000);

    return (
        <>
            <Header title="Room" />
            <Row>
                <Col>
                    <DisplayImg width={"75%"} height={"75%"} url={"https://i.ebayimg.com/images/g/23wAAOSw6fBht3-0/s-l400.jpg"} title={"Dracaufeu"}></DisplayImg>
                    <DisplayImg width={"75%"} height={"75%"} url={"https://fr.shopping.rakuten.com/photo/995571389.jpg"} title={"Tortank"}></DisplayImg>
                </Col>
            </Row>
            
        </>

    );
};





export default Room;