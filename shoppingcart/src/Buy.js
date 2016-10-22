import React from 'react';
import { Button } from 'react-bootstrap';
import Purchase from './utilsFuncs/Purchase';

class Buy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buy: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({buy: !this.state.buy});
        Purchase.Action(this.props.data,'buy');
    }

    //Check if product id in localstorage
    check(id){
        var fromLocal = JSON.parse(localStorage.getItem('items')) || [];
        if(fromLocal.indexOf(id) === -1){
            return true;
        }
    }

    render() {
        const text = this.state.buy  && this.check(this.props.data) ? <Button className="primary primary" onClick={this.handleClick}>Buy</Button> : 'In basket';
        return (
            <span>
                {text}
            </span>
        );
    }
}

module.exports = Buy;

