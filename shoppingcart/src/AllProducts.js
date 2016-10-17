import React from 'react';
import Header from './Header.js';
import Buy from './Buy.js';

export default function AllProducts(props){
    return(
        <div>
            <Header page="products"/>
            <h1>Product List</h1>
            { props.data.map((item,id) =>(
                    <p key={id}>
                        <b>{item.name}</b> ({item.id}) - &#163;{item.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Buy data={item.id}/>
                    </p>
                )
            )}
        </div>
    )
}
