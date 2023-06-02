import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import PageTitle from './PageTitle';

describe('PageTitle tests', () => {
    it('should render', () => {
        render(<BrowserRouter><PageTitle title="Чоловічі годинники"/></BrowserRouter>);
        const linkElement = screen.getByText('Чоловічі годинники');
        expect(linkElement).toBeInTheDocument();
    });
});