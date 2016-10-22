import React from 'react';
import Header from './Header.js';
import Buy from './Buy.js';
import './styles/App.css';

export default function AllProducts(props){
    return(
        <div>
            <Header page="products"/>
            <h1>Product List</h1>
            <div className="container col-lg-4 col-lg-offset-4">
                <table className="table">
                    <tbody>
                    { props.data.map((item,id) =>(
                            <tr key={id}>
                                <td className="tableAlign"><b>{item.name}</b> ({item.id}) - &#163;{item.price}</td><td><Buy data={item.id}/></td>
                            </tr>
                        )
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
