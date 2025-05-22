import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
    it('renders the app title', () => {
        render(<App />);
        expect(screen.getByText('Gestor de Frases')).toBeInTheDocument();
    });
});