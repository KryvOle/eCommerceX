import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import SmartWatchPage from './SmartWatchPage';

describe('SmartWatchPage tests', () => {
    it('SmartWatchPage render', () => {
        render(<BrowserRouter><SmartWatchPage/></BrowserRouter>);
        const linkElement = screen.getByText('Смарт-годинники');
        expect(linkElement).toBeInTheDocument();
    });
});