import { fireEvent, render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import CartSum from './CartSum';
import CheckoutBtn from './CheckoutBtn';
import ItemCounter from './ItemCounter';
import ShoppingCartPage from './ShoppingCartPage';
import ShoppingCartItem from './ShoppingCartItem';

const testItems = [{title : "Fossil Leather Watch", price: "967"},
                    {title : "Fossil Leather Watch", price: "1025"},
                    {title : "Fossil Leather Watch", price: "110670"},
                    {title : "Fossil Leather Watch", price: "99999"}];

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
    it('CartSum should count final price correctly', () => {
        render(<BrowserRouter><CartSum items={testItems}/></BrowserRouter>);
        const linkElement = screen.getByText(/212661/);
        expect(linkElement).toBeInTheDocument();
    });
    it('Increase decrease items work correctly', () => {
        // render(<BrowserRouter><ItemCounter/></BrowserRouter>);
        // const buttons = screen.getAllByRole('button');
        // fireEvent.click(buttons[0]);
    });
});