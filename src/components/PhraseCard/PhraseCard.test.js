import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PhraseCard from './PhraseCard';
import { PhrasesProvider } from '../../context/PhrasesContext';

const mockPhrase = {
    id: '1',
    text: 'Esta es una frase de prueba',
    createdAt: new Date(),
};

describe('PhraseCard', () => {
    it('renders phrase text and delete button', () => {
        render(
            <PhrasesProvider>
                <PhraseCard phrase={mockPhrase} />
            </PhrasesProvider>
        );

        expect(screen.getByText(mockPhrase.text)).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /eliminar/i })).toBeInTheDocument();
    });

    it('calls deletePhrase when delete button is clicked', () => {
        const deletePhraseMock = jest.fn();

        render(
            <PhrasesProvider value={{ deletePhrase: deletePhraseMock }}>
                <PhraseCard phrase={mockPhrase} />
            </PhrasesProvider>
        );

        const deleteButton = screen.getByRole('button', { name: /eliminar/i });
        fireEvent.click(deleteButton);
        expect(deletePhraseMock).toHaveBeenCalledWith(mockPhrase.id);
    });
});