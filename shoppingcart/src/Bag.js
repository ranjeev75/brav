import React from 'react';
import './styles/App.css';
import axios from 'axios';
import CartProducts from './CartProducts.js';
import Purchase from './utilsFuncs/Purchase'

class Bag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
        this.deleteItem = this.deleteItem.bind(this);
    }
    componentWillMount(){
        axios.get('/api/shoppingbag')
            .then(function(response) {
                this.setState({
                    items: response.data
                })
            }.bind(this));
    }
    deleteItem(id){
        Purchase.Action(id,'remove');
        let items = this.state.items.filter(item => item.id !== id);
        this.setState({items});
    }
    render() {
        return (
            <div className="App">
                <CartProducts data={this.state.items} handleClick={this.deleteItem} />
            </div>
        );
    }
}

export default Bag;

