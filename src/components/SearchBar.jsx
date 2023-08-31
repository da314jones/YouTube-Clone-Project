import React, { useState } from 'react';

export default function SearchBar({onSearch}) {
    const [query, setQuery] = useState("");

    const handleSearch = () => {
        if(query) {
            onSearch(query);
        }
    };

    return (
        <div>
            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search' />
            <button onClick={handleSearch} >Search</button>
        </div>
    );
}