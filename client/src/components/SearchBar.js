import React from 'react'

import './style.css';

export default function SearchBar(props) {
    return (
        <div className='container mt-5'>
            <form id='search-form' className='row input-group shadow-sm' onSubmit={props.onSubmit} >
                <label className='align-middle text-center form-label col-sm-2 col-form-label' 
                    htmlFor='book-search-field' style={{fontSize: '20px'}}>Search</label>
                <div className='col-sm-10 input-group'>
                    <input className='form-control form-control-lg' 
                        id='book-search-field' type='text' 
                        onChange={props.onChange}></input>
                    <button className='btn btn-primary' type='button' style={{width: '80px'}}>Go</button>
                </div>
            </form>
        </div>
    )
}
