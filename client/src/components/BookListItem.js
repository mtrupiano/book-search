import React from 'react';

import API from '../utils/API';

import './style.css'

export default function SearchResultsListItem(props) {

    const handleSave = (event) => {
        API.saveBook({
            title: props.book.title,
            authors: props.book.authors,
            image: props.book.imageLinks.thumbnail || '',
            description: props.book.description,
            link: props.book.previewLink
        }).then( (result) => {
            console.log(result);
        }).catch( (err) => {
            console.log(err);
        });
    }

    const handleView = (event) => {
        window.open(props.book.previewLink)
    }

    console.log(props.book);

    return (
        <li className='list-group-item shadow-sm'>
            <div className='row mb-2'>
                <div className='col-md-8'>
                    <h3>{props.book.title}</h3>
                    <h5 className='author-display'>{props.book.authors ? props.book.authors.join(', ') : 'No authors attributed'}</h5>
                </div>
                <div className='col-md-4 d-flex align-items-center'>
                    <button className='btn btn-success' onClick={handleSave}>Save</button>
                    <button className='btn btn-info' onClick={handleView}>View</button>
                </div>
            </div>
            <div className='br mb-2'></div>
            <div className='row'>
                <div className='col d-flex description-content'>
                    <img 
                        src={props.book.imageLinks ? 
                            props.book.imageLinks.thumbnail : 
                            'https://via.placeholder.com/128x195.png?text=No+thumbnail+available'} 
                            alt={props.book.title + '-thumbnail'}></img>


                    <p>{props.book.description || 'No description available' }</p>
                </div>
            </div>
        </li>
    )
}
