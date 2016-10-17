import React from 'react';
import { Link} from 'react-router'

class Header extends React.Component {
    constructor(props) {
        super(props);
        var x = JSON.parse(localStorage.getItem('items')) || [];
        this.state = {
            buy: x
        };
    }
    render() {
        const name = this.props.page === 'products' ? 'BAG' : 'HOME';
        const link = this.props.page === 'products' ? '/api/shoppingbag' : '/api';

        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header pull-right">

                            <Link to={link} className="navbar-brand">
                                {name} ({this.state.buy.length})
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

module.exports = Header;