import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import AdminWatchDetailsPage from './AdminWatchDetailsPage';
import EditWatchInfo from './EditWatchInfo';
import SaveEditionBtn from './SaveEditionBtn';

const testFunction = jest.fn();

describe('AdminWatchDetails and its components tests', () => {
    it('AdminWatchDetails renders', () => {
        render(<BrowserRouter><AdminWatchDetailsPage/></BrowserRouter>);
        const linkElement = screen.getByRole('img');
        expect(linkElement).toBeInTheDocument();
    });
    it('EditWatchInfo renders', () => {
        render(<BrowserRouter>
            <EditWatchInfo image="https://images.unsplash.com/photo-1542496658-e33a6d0d50f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            title="Fossil Leather Watch" price="6873" brand="Fossil" gender="Чоловічі" material="Сталь" style="Повсякденні" quantity={10}
            description="ABCDEFG" />  
            </BrowserRouter>);
        const linkElement = screen.getByText('ABCDEFG');
        expect(linkElement).toBeInTheDocument();
    });
    it('SaveEditionBtn renders', () => {
        render(<BrowserRouter><SaveEditionBtn/></BrowserRouter>);
        const linkElement = screen.getByRole('button');
        expect(linkElement).toBeInTheDocument();
    });
});
