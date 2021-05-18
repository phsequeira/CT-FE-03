import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NewsContainer from './NewsContainer';

describe('News article Container', () => {
    it('displays a list of articles by topic', async () => {
        render(<NewsContainer />);

        screen.getByText('Loading...');
    })
})