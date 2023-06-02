import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPart from './LandingPart';


test('Landing renders', () => {
    const { container } = render(<BrowserRouter><LandingPart /></BrowserRouter>);
    const linkElement = container.querySelector('a');
    expect(linkElement).toBeInTheDocument();
});

