import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import MensWatchPage from './MensWatchPage';

describe('MensWatchPage tests', () => {
    it('MensWatchPage render', () => {
        render(<BrowserRouter><MensWatchPage/></BrowserRouter>);
        const linkElement = screen.getByText('Чоловічі годинники');
        expect(linkElement).toBeInTheDocument();
    });
});