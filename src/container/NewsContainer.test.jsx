import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';

describe('News article Container', () => {
    it('displays a list of articles by topic', async () => {
        render(<NewsContainer />);

        screen.getByText('Loading...');

        const ul = await screen.findByRole('list', { name: 'articles'});
        expect(ul).not.toBeEmptyDOMElement();

        const input = await screen.findByLabelText('Article Topic');
        userEvent.type(input, 'dogs');

        const submitButton = await screen.findByRole('button', { name: 'find-article'});
        userEvent.click(submitButton);
    })
})