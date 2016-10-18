import React from 'react';
import { Link} from 'react-router'

class Header extends React.Component {
    constructor(props) {
        super(props);
        let bagCount = JSON.parse(localStorage.getItem('items')) || [];
        this.state = {
            buy: bagCount
        };
    }
    render() {
        const name = this.props.page === 'products' ? 'BAG' : 'HOME';
        const link = this.props.page === 'products' ? '/shoppingbag' : '/';
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