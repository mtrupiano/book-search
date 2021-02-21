import React, { useState, useEffect } from 'react'

import SearchBar from '../components/SearchBar';
import Nav from '../components/Nav';

export default function Search() {
    const [searchTerm, setSearchTerm] = useState({ term: '' });
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(searchTerm.term);
    }

    const handleInput = (event) => {
        setSearchTerm({term: event.target.value});
    }

    return (
        <div>
            <Nav />
            <SearchBar value={searchTerm} onSubmit={handleSubmit} onChange={handleInput}/>
        </div>
    )
}
