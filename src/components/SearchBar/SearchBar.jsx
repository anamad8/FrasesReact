import React, { useState, useEffect } from 'react';
import { usePhrases } from '../../context/PhrasesContext';
import { useDebounce } from '../../hooks/useDebounce';

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');
    const { setSearchTerm } = usePhrases();
    const debouncedSearchTerm = useDebounce(inputValue, 500);

    useEffect(() => {
        setSearchTerm(debouncedSearchTerm);
    }, [debouncedSearchTerm, setSearchTerm]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar frases..."
                value={inputValue}
                onChange={handleChange}
                aria-label="Buscar frases"
            />
        </div>
    );
};