import React from 'react';
import Header from './Header.js';
import Remove from './Remove.js';
import './styles/App.css';

export default function CartProducts(props){
    return(
        <div>
            <Header page=""/>
            <h1>Shopping Bag</h1>
            <div className="container col-lg-4 col-lg-offset-4">
                <table className="table">
                    <tbody>
                        { props.data.map((item,id) =>(
                            <tr key={id}>
                                <td className="tableAlign"><b>{item.name}</b> ({item.id}) - &#163;{item.price}</td><td><Remove data={item.id} handleClick={() => props.handleClick(item.id)}/></td>
                            </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
