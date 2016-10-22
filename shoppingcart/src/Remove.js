import React from 'react';
import { Button } from 'react-bootstrap';

export default function Remove(props){
    return <Button className="primary primary" onClick={props.handleClick}>Remove</Button>;
}


