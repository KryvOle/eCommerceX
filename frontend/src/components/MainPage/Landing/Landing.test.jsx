import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LandingPart from './LandingPart';
import MainText from './MainText';

describe('Landing tests', () => {
    it('LandingPart renders', () => {
        const { container } = render(<BrowserRouter><LandingPart /></BrowserRouter>);
        const linkElement = container.querySelector('a');
        expect(linkElement).toBeInTheDocument();
    });
    it('MainText renders', () => {
        const { container } = render(<BrowserRouter><MainText/></BrowserRouter>);
        const linkElement = container.querySelector('h1');
        expect(linkElement).toBeInTheDocument();
    });
});


