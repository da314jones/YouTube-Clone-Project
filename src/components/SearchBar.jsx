import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchBar({setSearchQuery}) {
    const [localQuery, setLocalQuery] = useState("");
    const navigate = useNavigate();

 const handleSearch = () => {
    setSearchQuery(localQuery);
    navigate('/thumbnails');
 }

    return (
        <div>
            <input type="text" value={localQuery} onChange={(e) => setLocalQuery(e.target.value)} placeholder='Search' />
            <button onClick={handleSearch} >Search</button>
        </div>
    );
}