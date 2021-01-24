import React from 'react'
import'./layout.css'


export default function Layout(props) {    

    return (
        <div className='layout-wrapper'>
            <header>
                <strong>LYRIC HUNT</strong></header>
            {props.children}
        </div>
    )
}
