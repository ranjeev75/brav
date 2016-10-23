import React from 'react';
import Header from './Header.js';
import './styles/App.css';
import Layout from './Layout.js'

export default function AllProducts(props){
    return(
        <div>
            <Header page="products"/>
            <h1>Product List</h1>
            <Layout data={props.data} src={'all'}/>
        </div>
    )
}
