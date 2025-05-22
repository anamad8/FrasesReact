import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from './SearchBar';
import { PhrasesProvider } from '../../context/PhrasesContext';

describe('SearchBar', () => {
    it('updates input value', () => {
        render(
            <PhrasesProvider>
                <SearchBar />
            </PhrasesProvider>
        );

        const input = screen.getByPlaceholderText('Buscar frases...');
        fireEvent.change(input, { target: { value: 'test' } });
        expect(input.value).toBe('test');
    });
});