import React from 'react';

import BookListItem from '../components/BookListItem';

import './style.css'

export default function BookList(props) {
    return (
        <div className='container'>
            <ul className='list-group-item shadow-sm' id='results-list'>
                {
                    props.items.map( (book) => {
                        return <BookListItem type={props.type} book={book}/>
                    })
                }
            </ul>
        </div>
    )
}
