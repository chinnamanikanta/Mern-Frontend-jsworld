import React from 'react';
import { useGlobalContext } from './context';


const SearchBox = () => {
    const {query, handleSearch} = useGlobalContext();

    return (
        <form className="search-form" onSubmit={(e) => e.preventDefault()}>

        <h2> Here, You Can Search Updates For Technologies</h2>

        <input type='text' className="form-input border border-success" value={query} onChange={(e) => handleSearch(e.target.value)} />




        </form>
        
        
        
        )

}

export default SearchBox