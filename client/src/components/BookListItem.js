import React from 'react';

import API from '../utils/API';

import './style.css'

export default function BookListItem(props) {

    const handleSave = (event) => {
        API.saveBook({
            title: props.book.title,
            authors: props.book.authors,
            imageLinks: props.book.imageLinks || '',
            description: props.book.description,
            previewLink: props.book.previewLink
        }).then( (result) => {
            console.log(result);
        }).catch( (err) => {
            console.log(err);
        });
    }

    const handleView = (event) => {
        window.open(props.book.previewLink)
    }

    const handleDelete = (event) => {
        API.deleteBook(event.target.getAttribute('data_bookId')).then( (result) => {
            console.log(result);
        }).catch( (err) => {
            console.log(err);
        });
    }

    return (
        props.book ?
        <li className='list-group-item shadow-sm' key={props.book.title}>
            <div className='row mb-2'>
                <div className='col-md-8'>
                    <h3>{props.book.title}</h3>
                    <h5 className='author-display'>{props.book.authors ? props.book.authors.join(', ') : 'No authors attributed'}</h5>
                </div>
                <div className='col-md-4 d-flex align-items-center justify-content-center'>
                    {
                        props.type === 'search' ? 
                        <button className='btn btn-success' onClick={handleSave}>Save</button> :
                        <button className='btn btn-danger' data_bookId={props.book._id} onClick={handleDelete}>Remove</button>
                    }
                    
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
        </li> : null
    )
}
