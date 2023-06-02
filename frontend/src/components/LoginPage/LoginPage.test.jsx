import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import LoginPage from './LoginPage';
import LoginActionBtn from './LoginActionBtn';
import LoginText from './LoginText';
import LoginTextField from './LoginTextField';
import SignupInvite from './SignupInvite';

describe('LoginPage tests', () => {
    it('LoginPage renders', () => {
        render(<BrowserRouter><LoginPage/></BrowserRouter>);
        const linkElement = screen.getAllByText(/Вхід/);
        expect(linkElement[0]).toBeInTheDocument();
    });
    it('LoginActionBtn renders', () => {
        render(<BrowserRouter><LoginActionBtn/></BrowserRouter>);
        const linkElement = screen.getByText('Увійти');
        expect(linkElement).toBeInTheDocument();
    });
    it('LoginText renders', () => {
        render(<BrowserRouter><LoginText title="Вхід" /></BrowserRouter>);
        const linkElement = screen.getByText('Вхід');
        expect(linkElement).toBeInTheDocument();
    });
    it('LoginTextField renders', () => {
        render(<BrowserRouter><LoginTextField title="ABC" type="password" /></BrowserRouter>);
        const linkElement = screen.getAllByText('ABC');
        expect(linkElement[0]).toBeInTheDocument();
    });
    it('SignupInvite renders', () => {
        render(<BrowserRouter><SignupInvite invite="ABC"/></BrowserRouter>);
        const linkElement = screen.getByText('ABC');
        expect(linkElement).toBeInTheDocument();
    });
});