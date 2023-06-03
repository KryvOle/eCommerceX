import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { BrowserRouter } from 'react-router-dom';
import AddItemDialog from './AddItemDialog';
import AddItemPhoto from './AddItemPhoto';
import AdminAddItemBtn from './AdminAddItemBtn';
import SortingIcon from './SortingIcon';
import SelectSortingOption from './SelectSortingOption';
import SortingElement from './SortingElement';
import ItemCard from './ItemCard';
import FileUpload from './FileUpload';
import MainPageCatalogue from './MainPageCatalogue';

const testFunction = jest.fn();

describe('MainPageCatalogue and its components tests', () => {
    it('AddItemDialog renders', () => {
        render(<BrowserRouter><AddItemDialog open={true} onClose={testFunction}/></BrowserRouter>);
        const linkElement = screen.getByText('Додати товар');
        expect(linkElement).toBeInTheDocument();
    });
    it('AddItemPhoto renders', () => {
        render(<BrowserRouter><AddItemPhoto/></BrowserRouter>);
        const linkElement = screen.getByRole('img');
        expect(linkElement).toBeInTheDocument();
    });
    it('AdminAddItemBtn renders', () => {
        render(<BrowserRouter><AdminAddItemBtn onClick={testFunction}/></BrowserRouter>);
        const linkElement = screen.getByText('Додати товар');
        expect(linkElement).toBeInTheDocument();
    });
    it('AdminAddItemBtn works', () => {
        render(<BrowserRouter><AdminAddItemBtn onClick={testFunction}/></BrowserRouter>);
        const button = screen.getByRole('button');
        userEvent.click(button);
        expect(testFunction).toHaveBeenCalled();
    });
    it('SelectSortingOptrion renders', () => {
        render(<BrowserRouter><SelectSortingOption/></BrowserRouter>);
        const linkElement = screen.getByText('Сортувати');
        expect(linkElement).toBeInTheDocument();
    });
    it('SortingElement renders', () => {
        render(<BrowserRouter><SortingElement/></BrowserRouter>);
        const linkElement = screen.getByRole('img');
        expect(linkElement).toBeInTheDocument();
        const linkElement2 = screen.getByText('Сортувати');
        expect(linkElement2).toBeInTheDocument();
    });
    it('SortingIcon renders', () => {
        render(<BrowserRouter><SortingIcon/></BrowserRouter>);
        const linkElement = screen.getByRole('img');
        expect(linkElement).toBeInTheDocument();
    });
    it('ItemCard renders', () => {
        render(<BrowserRouter><ItemCard/></BrowserRouter>);
        const linkElement = screen.getByText('Купити');
        expect(linkElement).toBeInTheDocument();
    });
    it('FileUpload renders', () => {
        render(<BrowserRouter><FileUpload/></BrowserRouter>);
        const linkElement = screen.getByText('Завантажити фото');
        expect(linkElement).toBeInTheDocument();
    });
    it('MainPageCatalogue renders', () => {
        render(<BrowserRouter><MainPageCatalogue/></BrowserRouter>);
        const linkElement = screen.getByText('Сортувати');
        expect(linkElement).toBeInTheDocument();
    });
});
