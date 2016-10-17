import React from 'react';

export default function Header(props){
    return(
        <div className='main-container'>
            {props.children}
        </div>
    )
}