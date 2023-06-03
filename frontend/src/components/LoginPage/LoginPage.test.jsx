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
        const linkElement = screen.getAllByText(/вхід/i);
        expect(linkElement[0]).toBeInTheDocument();
    });
    it('LoginActionBtn renders', () => {
        render(<BrowserRouter><LoginActionBtn/></BrowserRouter>);
        const linkElement = screen.getByText(/увійти/i);
        expect(linkElement).toBeInTheDocument();
    });
    it('LoginText renders', () => {
        render(<BrowserRouter><LoginText title="ABCDE" /></BrowserRouter>);
        const linkElement = screen.getByText('ABCDE');
        expect(linkElement).toBeInTheDocument();
    });
    it('LoginTextField renders', () => {
        render(<BrowserRouter><LoginTextField title="ABCDE" type="password" /></BrowserRouter>);
        const linkElement = screen.getAllByText('ABCDE');
        expect(linkElement[0]).toBeInTheDocument();
    });
    it('SignupInvite renders', () => {
        render(<BrowserRouter><SignupInvite invite="ABCDE"/></BrowserRouter>);
        const linkElement = screen.getByText('ABCDE');
        expect(linkElement).toBeInTheDocument();
    });
});