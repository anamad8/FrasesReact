import React, { useCallback } from 'react';
import { usePhrases } from '../../context/PhrasesContext';

const PhraseCard = React.memo(({ phrase }) => {
    const { deletePhrase } = usePhrases();

    const handleDelete = useCallback(() => {
        deletePhrase(phrase.id);
    }, [deletePhrase, phrase.id]);

    return (
        <div className="phrase-card" data-testid={`phrase-card-${phrase.id}`}>
            <div className="phrase-text">{phrase.text}</div>
            <div className="phrase-meta">
                <span>{new Date(phrase.createdAt).toLocaleString()}</span>
                <button onClick={handleDelete} aria-label={`Eliminar frase: ${phrase.text}`}>
                    Eliminar
                </button>
            </div>
        </div>
    );
});

PhraseCard.displayName = 'PhraseCard';

export default PhraseCard;