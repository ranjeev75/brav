import React from 'react';
import { Link} from 'react-router'
import Counter from './Counter'

export default function Header(props){
    const name = props.page === 'products' ? 'BAG' : 'HOME';
    const link = props.page === 'products' ? '/shoppingbag' : '/';
    return (
        <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header pull-right">
                        <Link to={link} className="navbar-brand">
                            {name} <Counter/>
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}

