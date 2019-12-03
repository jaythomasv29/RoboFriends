import React from 'react'
//Search input component that has an onChange that calls a searchChange method from App.js(parent)
const SearchBox = ({ searchChange }) => {
    return(
        <div className="pa2 bb b--silver">
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search" 
            placeholder="search friends"
            onChange={searchChange}/>    
        </div>
    )
}
export default SearchBox