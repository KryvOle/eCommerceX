import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import ToCartBtn from './ToCartBtn';
import WatchInfo from './WatchInfo';
import WatchDetailsPage from './WatchDetailsPage';

describe("WatchDetailsPage tests", () => {
    it("ToCartBtn renders", () => {
        render(<BrowserRouter><ToCartBtn/></BrowserRouter>);
        const linkElement = screen.getByText('Додати в кошик');
        expect(linkElement).toBeInTheDocument();
    });
    it("WatchInfo renders", () => {
        render(<BrowserRouter><WatchInfo/></BrowserRouter>);
        const linkElement = screen.getByText(/бренд/i);
        expect(linkElement).toBeInTheDocument();
    });
    it("WatchDetailsPage renders", () => {
        render(<BrowserRouter><WatchDetailsPage/></BrowserRouter>);
        const linkElement = screen.getByRole('img');
        expect(linkElement).toBeInTheDocument();
    });
});
