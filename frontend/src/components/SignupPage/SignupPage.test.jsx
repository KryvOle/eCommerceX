import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import SignupPage from './SignupPage';
import SignupActionBtn from './SignupActionBtn';

describe('SignupPage tests', () => {
    it('SignupPage renders', () => {
        render(<BrowserRouter><SignupPage/></BrowserRouter>);
        const linkElement = screen.getByText('Реєстрація');
        expect(linkElement).toBeInTheDocument();
    });
    it('SignupActionBtn renders', () => {
        render(<BrowserRouter><SignupActionBtn/></BrowserRouter>);
        const linkElement = screen.getByText('Зареєструватись');
        expect(linkElement).toBeInTheDocument();
    });
});