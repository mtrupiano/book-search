import React, { useState, useEffect } from 'react'

import SearchBar from '../components/SearchBar';
import Nav from '../components/Nav';
import BookList from '../components/BookList';

import axios from "axios";

// import API from '../utils/API';

export default function Search() {
    const key = 'AIzaSyD-TePTp6M8p6WAz5CLj1CwdwdQPzEHYTM'
    const url = 'https://www.googleapis.com/books/v1/volumes?maxResults=25&orderBy=relevance&q=';
    const [searchTerm, setSearchTerm] = useState({ term: '' });
    const [searchResults, setSearchResults] = useState();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        axios.get(url + searchTerm.term).then( (response) => {
            setSearchResults(response.data.items.map( e =>  e.volumeInfo ));
            console.log(response);
        }).catch( (err) => {
            console.log(err);
        });
    }

    const handleInput = (event) => {
        setSearchTerm({term: event.target.value});
    }

    return (
        <div>
            <Nav page='search' />
            <SearchBar value={searchTerm} onSubmit={handleSubmit} onChange={handleInput}/>
            {searchResults ? <BookList type='search' items={searchResults} /> : null}
        </div>
    )
}
