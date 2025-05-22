import React from 'react';
import { PhrasesProvider, usePhrases } from './context/PhrasesContext'; 
import { PhraseForm } from './components/PhraseForm/PhraseForm';
import { SearchBar } from './components/SearchBar/SearchBar';
import PhraseCard from './components/PhraseCard/PhraseCard';
import './styles.css';

const PhrasesGrid = () => {
  const { filteredPhrases } = usePhrases();

  return (
    <div className="phrases-grid">
      {filteredPhrases.length > 0 ? (
        filteredPhrases.map((phrase) => (
          <PhraseCard key={phrase.id} phrase={phrase} />
        ))
      ) : (
        <div className="no-phrases">No hay frases para mostrar</div>
      )}
    </div>
  );
};

const App = () => {
  return (
    <PhrasesProvider>
      <div className="app-container">
        <h1>Gestor de Frases</h1>
        <div className="app-content">
          <div className="controls-section">
            <PhraseForm />
            <SearchBar />
          </div>
          <PhrasesGrid />
        </div>
      </div>
    </PhrasesProvider>
  );
};

export default App;