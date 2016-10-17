import React from 'react';
import './App.css';
import axios from 'axios';
import CartProducts from './CartProducts.js';
import Purchase from './Purchase'

const Bag = React.createClass({
    getInitialState:function(){
        return {
            items: []
        };
    },
    componentWillMount:function(){
        axios.get('/api/shoppingbag')
            .then(function(response) {
                this.setState({
                    items: response.data
                })
            }.bind(this));
    },
    delete(id){
        Purchase.Action(id,'remove');
        let items = this.state.items.filter(item => item.id !== id);
        this.setState({items});
    },
    render() {
        return (
            <div className="App">
                <CartProducts data={this.state.items} handleClick={this.delete} />
            </div>
        );
    }
});

export default Bag;

