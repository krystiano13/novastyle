import React from 'react';

const Search = () => {
    return (
        <form className='search container-fluid'>
            <input type='text' placeholder='Example: bright blue summer shirt' />
            <button className='btn' type='submit'>Search</button>
        </form>
    )
}

export { Search };