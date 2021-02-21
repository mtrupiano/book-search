import React from 'react';

import './style.css'

export default function SearchResultsListItem(props) {
    return (
        <li className='list-group-item shadow-sm'>
            {props.title}
        </li>
    )
}
