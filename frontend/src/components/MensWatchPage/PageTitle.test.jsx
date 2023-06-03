import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import PageTitle from './PageTitle';

describe('PageTitle tests', () => {
    it('should render', () => {
        render(<BrowserRouter><PageTitle title="ABCDE"/></BrowserRouter>);
        const linkElement = screen.getByText('ABCDE');
        expect(linkElement).toBeInTheDocument();
    });
});