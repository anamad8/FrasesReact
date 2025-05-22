import React, { createContext, useContext, useReducer, useCallback } from 'react';

const PhrasesContext = createContext();

const phrasesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PHRASE':
      const newPhrase = {
        id: Date.now().toString(),
        text: action.payload,
        createdAt: new Date(),
      };
      return { ...state, phrases: [...state.phrases, newPhrase] };
    case 'DELETE_PHRASE':
      return { ...state, phrases: state.phrases.filter(p => p.id !== action.payload) };
    case 'SET_SEARCH_TERM':
      return { ...state, searchTerm: action.payload };
    default:
      return state;
  }
};

export const PhrasesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(phrasesReducer, {
    phrases: [],
    searchTerm: '',
  });

  const addPhrase = useCallback((text) => {
    dispatch({ type: 'ADD_PHRASE', payload: text });
  }, []);

  const deletePhrase = useCallback((id) => {
    dispatch({ type: 'DELETE_PHRASE', payload: id });
  }, []);

  const setSearchTerm = useCallback((term) => {
    dispatch({ type: 'SET_SEARCH_TERM', payload: term });
  }, []);

  const filteredPhrases = state.phrases.filter(phrase =>
    phrase.text.toLowerCase().includes(state.searchTerm.toLowerCase())
  );

  return (
    <PhrasesContext.Provider
      value={{
        state,
        addPhrase,
        deletePhrase,
        setSearchTerm,
        filteredPhrases,
      }}
    >
      {children}
    </PhrasesContext.Provider>
  );
};

export const usePhrases = () => {
  const context = useContext(PhrasesContext);
  if (context === undefined) {
    throw new Error('usePhrases must be used within a PhrasesProvider');
  }
  return context;
};