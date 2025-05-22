import React from 'react';
import { render, screen } from '@testing-library/react';
import { PhrasesProvider, usePhrases } from './PhrasesContext';

describe('PhrasesProvider', () => {
    it('provides phrases context to children', () => {
        const TestComponent = () => {
            const { addPhrase } = usePhrases();
            return <button onClick={() => addPhrase('Test phrase')}>Add Phrase</button>;
        };

        render(
            <PhrasesProvider>
                <TestComponent />
            </PhrasesProvider>
        );

        expect(screen.getByText('Add Phrase')).toBeInTheDocument();
    });
});