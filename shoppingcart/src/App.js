import React from 'react';
//import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import AllProducts from './AllProducts.js';

const App = React.createClass({
    getInitialState:function(){
        return {
            items: []
        };
    },
    componentWillMount:function(){
        axios.get('/api')
            .then(function(response) {
                this.setState({
                    items: this.state.items.concat(response.data)
                })
            }.bind(this));
    },
    render() {
        return (
          <div className="App">
              <AllProducts data={this.state.items}/>
          </div>
        );
  }
});

export default App;
