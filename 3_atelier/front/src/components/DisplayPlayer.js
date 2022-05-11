import React from 'react';
import { Popover, OverlayTrigger, Button } from 'react-bootstrap';


const popover = (
    <Popover id="popover-basic">
        <Popover.Header as="h3">Winner :</Popover.Header>
        <Popover.Body>
            And here's some <strong>amazing</strong> content. It's very engaging.
            right?
        </Popover.Body>
    </Popover>
);

const Example = () => (
    <OverlayTrigger trigger="click" placement="right" overlay={popover}>
        <Button variant="success">Click to see the winner</Button>
    </OverlayTrigger>
);

// render(<Example />);

// const DisplayPlayer = (props) => {

//     return (
//         <>
//             <Popover id="popover-basic">
//                 <Popover.Header as="h3">Popover right</Popover.Header>
//                 <Popover.Body>
//                     And here's some <strong>amazing</strong> content. It's very engaging.
//                     right?
//                 </Popover.Body>
//             </Popover>
//             <OverlayTrigger trigger="click" placement="right" overlay={popover}>
//                 <Button variant="success">Click me to see</Button>
//             </OverlayTrigger>


//         </>
//     );
// };

export default Example;