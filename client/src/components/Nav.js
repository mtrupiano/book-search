import React from 'react'

export default function Nav(props) {
    return (
        <nav className='navbar navbar-dark bg-dark'>
            <a href='./search' className='navbar-brand'>Search Google Books</a>
            <a href={props.page==='search' ? './saved':'./search'} 
                className='btn btn-info'>{props.page === 'search' ? 'Saved' : 'Search'}</a>
        </nav>
    )
}
