import { render, screen } from '@testing-library/react';
import React, { useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

describe('NavBar tests', () => {
    it('should render', () => {
        render(<BrowserRouter><NavBar menuOpen={true}/></BrowserRouter>);
        const linkElement = screen.getByText('WATCH');
        expect(linkElement).toBeInTheDocument();
    });
    it('should not render', () => {
        render(<BrowserRouter><NavBar menuOpen={false}/></BrowserRouter>);
        const linkElement = screen.queryByText('WATCH');
        expect(linkElement).toBeNull();
    });
});
