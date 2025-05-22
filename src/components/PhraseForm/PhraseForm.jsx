import React, { useState, useCallback } from 'react';
import { usePhrases } from '../../context/PhrasesContext';

export const PhraseForm = () => {
    const [phraseText, setPhraseText] = useState('');
    const { addPhrase } = usePhrases();

    const handleSubmit = useCallback(
        (e) => {
            e.preventDefault();
            if (phraseText.trim()) {
                addPhrase(phraseText);
                setPhraseText('');
            }
        },
        [phraseText, addPhrase]
    );

    return (
        <form onSubmit={handleSubmit} className="phrase-form">
            <textarea
                value={phraseText}
                onChange={(e) => setPhraseText(e.target.value)}
                placeholder="Escribe una nueva frase..."
                aria-label="Nueva frase"
                rows={3}
            />
            <button type="submit" disabled={!phraseText.trim()}>
                Agregar Frase
            </button>
        </form>
    );
};