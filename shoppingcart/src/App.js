import React from 'react';
import './styles/App.css';
import axios from 'axios';
import AllProducts from './AllProducts.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        };
    }
    componentWillMount(){
        axios.get('/api')
            .then(function(response) {
                this.setState({
                    items: this.state.items.concat(response.data)
                })
            }.bind(this));
    }
    render() {
        return (
          <div className="App">
              <AllProducts data={this.state.items}/>
          </div>
        );
  }
}

export default App;
