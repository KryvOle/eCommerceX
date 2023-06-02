import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import ProfilePage from './ProfilePage';

describe('ProfilePage tests', () => {
    it('ProfilePage renders', () => {
        render(<BrowserRouter><ProfilePage/></BrowserRouter>);
        const linkElement = screen.getByText('Зберегти');
        expect(linkElement).toBeInTheDocument();
    });
});