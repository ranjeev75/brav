import React from 'react';
import Header from './Header.js';
import './styles/App.css';
import Layout from './Layout.js'

export default function CartProducts(props){
    return(
        <div>
            <Header page=""/>
            <h1>Shopping Bag</h1>
            <Layout data={props.data}  src={'bag'} handleClick={props.handleClick}/>
        </div>
    )
}

