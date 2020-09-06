import React from 'react'
import Header from "../Headers"

export default function Layout(props) {
    return (
        <div>
           <>
            <Header />
            {props.children}
           </> 
        </div>
    )
}
