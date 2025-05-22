import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PhraseForm from './PhraseForm';
import { PhrasesProvider } from '../../context/PhrasesContext';

describe('PhraseForm', () => {
    it('allows entering text and submitting', () => {
        render(
            <PhrasesProvider>
                <PhraseForm />
            </PhrasesProvider>
        );

        const textarea = screen.getByPlaceholderText('Escribe una nueva frase...');
        fireEvent.change(textarea, { target: { value: 'Nueva frase' } });
        expect(textarea.value).toBe('Nueva frase');
    });
});