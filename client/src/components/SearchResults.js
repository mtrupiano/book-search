import React from 'react';

import SearchResultsListItem from '../components/SearchResultsListItem';

import './style.css'

export default function SearchResults(props) {
    return (
        <div className='container'>
            <ul className='list-group-item shadow-sm' id='results-list'>
                {
                    props.items.map( (book) => {
                        return <SearchResultsListItem title={book.volumeInfo.title}/>
                    })
                }
            </ul>
        </div>
    )
}
