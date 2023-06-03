import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';

import Header from './Header';
import Menu from './Menu';
import SearchBar from './SearchBar';
import ShoppingCartIcon from './ShoppingCartIcon';
import LoginBtn from './LoginBtn';

const handleMenu = jest.fn();

describe("Header tests", () => {
    it("Menu renders", () => {
        render(<BrowserRouter><Menu/></BrowserRouter>);
        const linkElement = screen.getByText('WATCH');
        expect(linkElement).toBeInTheDocument();
    });
    it("LoginBtn renders", () => {
        render(<BrowserRouter><LoginBtn/></BrowserRouter>);
        const linkElement = screen.getByText('Вхід');
        expect(linkElement).toBeInTheDocument();
    });
    it("SearchBar renders", () => {
        render(<BrowserRouter><SearchBar/></BrowserRouter>);
        const linkElement = screen.getByPlaceholderText(/шукати/i);
        expect(linkElement).toBeInTheDocument();
    });
    it("ShoppingCartIcon renders", () => {
        const { container } = render(<BrowserRouter><ShoppingCartIcon/></BrowserRouter>);
        const linkElement = container.querySelector('svg');
        expect(linkElement).toBeInTheDocument();
    
    });
    it("Header renders", () => {
        render(<BrowserRouter><Header handleMenu={handleMenu} /></BrowserRouter>);
        const linkElement = screen.getByText(/вхід/i);
        expect(linkElement).toBeInTheDocument();
    });
});
