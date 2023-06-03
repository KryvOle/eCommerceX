import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';

import Footer from './Footer';

test('Footer renders', () => {
    render(<BrowserRouter><Footer/></BrowserRouter>);
    const linkElement = screen.getByText(/ecommercex/i);
    expect(linkElement).toBeInTheDocument();
});