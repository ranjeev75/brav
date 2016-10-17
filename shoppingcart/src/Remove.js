import React from 'react';
import { Button } from 'react-bootstrap';

class Remove extends React.Component {
    render() {
        return <Button className="primary primary" onClick={this.props.handleClick}>Remove</Button>;
    }
}

module.exports = Remove;

