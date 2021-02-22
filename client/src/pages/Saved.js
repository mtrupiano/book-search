import React, { useState, useEffect } from 'react';

import Nav from '../components/Nav';
import BookList from '../components/BookList';
import API from '../utils/API';



export default function Saved() {

    const [savedItems, setSavedItems] = useState();

    function loadSavedBooks() {
        API.getBooks().then( (result) => {
            setSavedItems(result.data);
        }).catch( (err) => {
            console.log(err);
        })
    }

    useEffect( () => {
        loadSavedBooks();
    }, []);

    return (
        <div>
            <Nav />
            <h2>My Saved Books</h2>
            <BookList type='saved' items={savedItems || []} />
        </div>
    )
}
