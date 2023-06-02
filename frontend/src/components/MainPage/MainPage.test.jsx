import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';
import Footer from './Footer/Footer';

import Header from './Header/Header';
import LoginBtn from './Header/LoginBtn';
import Menu from './Header/Menu';
import SearchBar from './Header/SearchBar';
import ShoppingCartIcon from './Header/ShoppingCartIcon';

import LandingPart from './Landing/LandingPart';

describe('MainPage component', () => {
   
    it('Landing renders', () => {
        render(<BrowserRouter><LandingPart/></BrowserRouter>);
        const linkElement = screen.getByText('Вхід');
        expect(linkElement).toBeInTheDocument();
    });
  
   
});