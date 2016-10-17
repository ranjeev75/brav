import React from 'react';
import Header from './Header.js';
import Remove from './Remove.js';

export default function CartProducts(props){
    return(
        <div>
            <Header page=""/>
            <h1>Shopping Bag</h1>
            { props.data.map((item,id) =>(
                    <p key={id}>
                        <b>{item.name}</b> ({item.id}) - &#163;{item.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<Remove data={item.id} handleClick={() => props.handleClick(item.id)}/>
                    </p>
                )
            )}
        </div>
    )
}
