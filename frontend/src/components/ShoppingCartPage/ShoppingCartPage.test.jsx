import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import CartSum from './CartSum';
import CheckoutBtn from './CheckoutBtn';
import ItemCounter from './ItemCounter';
import ShoppingCartPage from './ShoppingCartPage';
import ShoppingCartItem from './ShoppingCartItem';

const testItems = [{title : "Fossil Leather Watch", price: "6873"},
                    {title : "Fossil Leather Watch", price: "6873"},
                    {title : "Fossil Leather Watch", price: "6873"},
                    {title : "Fossil Leather Watch", price: "6873"}];

describe('ShoppingCartPage tests', () => {
    it('ShoppingCartPage renders', () => {
        render(<BrowserRouter><ShoppingCartPage/></BrowserRouter>);
        const linkElement = screen.getByText('Кошик');
        expect(linkElement).toBeInTheDocument();
    });
    it('CartSum renders', () => {
        render(<BrowserRouter><CartSum items={testItems}/></BrowserRouter>);
        const linkElement = screen.getByText(/Сума замовлення/);
        expect(linkElement).toBeInTheDocument();
    });
    it('CheckoutBtn renders', () => {
        render(<BrowserRouter><CheckoutBtn/></BrowserRouter>);
        const linkElement = screen.getByText('Оформити замовлення');
        expect(linkElement).toBeInTheDocument();
    });
    it('ItemCounter renders', () => {
        render(<BrowserRouter><ItemCounter/></BrowserRouter>);
        const linkElement = screen.getByText('+');
        expect(linkElement).toBeInTheDocument();
    });
    it('ShoppingCartItem renders', () => {
        render(<BrowserRouter><ShoppingCartItem/></BrowserRouter>);
        const linkElement = screen.getByText('+');
        expect(linkElement).toBeInTheDocument();
    });
});