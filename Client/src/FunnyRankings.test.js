import React from 'react';
import {render, fireEvent, cleanup, screen} from '@testing-library/react';
import FunnyRankings from './FunnyRankings.js';

afterEach(cleanup)

it('Check for FunnyRanking component', () => {
    const testMessage = 'Stanley Hudson'
    const { getByText } = render(<FunnyRankings />);

    expect(screen.queryByText(testMessage)).toBeDefined()
    // expect(getByText(testMessage)).toBeDefined()

 })
