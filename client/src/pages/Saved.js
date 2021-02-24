import React, { useState, useEffect } from 'react';

import Nav from '../components/Nav';
import BookList from '../components/BookList';
import API from '../utils/API';

export default function Saved() {

    const [savedItems, setSavedItems] = useState();

    function loadSavedBooks() {
        API.getBooks().then( (result) => {
            setSavedItems(result.data);
            console.log(result)
        }).catch( (err) => {
            console.log(err);
        })
    }

    useEffect( () => {
        loadSavedBooks();
    }, []);

    return (
        <div>
            <Nav page='saved'/>
            <div className='container mt-4 mb-3'>
                <h2 className='text-center'>My Saved Books</h2>
            </div>
            <BookList type='saved' items={savedItems || []} />
        </div>
    )
}
