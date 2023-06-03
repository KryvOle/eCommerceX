import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import CheckoutPage from './CheckoutPage';

describe('CheckoutPage tests', () => {
    it('CheckoutPage renders', () => {
        render(<BrowserRouter><CheckoutPage/></BrowserRouter>);
        const linkElement = screen.getAllByText(/замовлення/i);
        expect(linkElement[0]).toBeInTheDocument();
    });
});