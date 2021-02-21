import React from 'react'

export default function SearchBar() {
    return (
        <div className='container'>
            <div className='row'>
                <label className='form-label col-sm-2 col-form-label' 
                    htmlFor='book-search-field'>Search</label>
                <div className='col-sm-10'>
                    <input className='form-control form-control-lg' id='book-search-field' type='text'></input>
                </div>
            </div>
        </div>
    )
}
