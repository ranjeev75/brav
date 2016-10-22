/**
 * Created by Ranjeev on 18/10/2016.
 */
import React from 'react';
import axios from 'axios';

class Counter extends React.Component {
    constructor(props) {
        super(props);
        let bagCount = JSON.parse(localStorage.getItem('items')) || [];
        this.state = {
            buy: bagCount
        };
        this.loadFromServer = this.loadFromServer.bind(this);
    }

    loadFromServer(){
    axios.get('/api/shoppingbag')
        .then((response) => {
            this.setState({
                buy: response.data
            })
        });
    }

    componentWillMount() {
        //this.loadFromServer();
        this.timer = setInterval(this.loadFromServer, 100);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <span>
                ({this.state.buy.length})
            </span>
        );
    }
}

module.exports = Counter;
