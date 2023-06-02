import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import WomensWatchPage from './WomensWatchPage';

describe('WomensWatchPage tests', () => {
    it('WomensWatchPage render', () => {
        render(<BrowserRouter><WomensWatchPage/></BrowserRouter>);
        const linkElement = screen.getByText('Жіночі годинники');
        expect(linkElement).toBeInTheDocument();
    });
});