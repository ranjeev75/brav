/**
 * Created by Ranjeev on 23/10/2016.
 */
import React from 'react';
import Buy from './Buy.js';
import Remove from './Remove.js';
import './styles/App.css';

export default function Layout(props){
    return(
        <div>
            <div className="container col-lg-4 col-lg-offset-4">
                <table className="table">
                    <tbody>
                    {props.src==='all' ?
                        props.data.map((item,id) =>(
                                <tr key={id}>
                                    <td className="tableAlign"><b>{item.name}</b> ({item.id}) - &#163;{item.price}</td><td><Buy data={item.id}/></td>
                                </tr>
                            )
                        ) :
                        props.data.map((item,id) =>(
                                <tr key={id}>
                                    <td className="tableAlign"><b>{item.name}</b> ({item.id}) - &#163;{item.price}</td><td><Remove data={item.id} handleClick={() => props.handleClick(item.id)}/></td>
                                </tr>
                            )
                        )
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}