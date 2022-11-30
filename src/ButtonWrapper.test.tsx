import React from 'react';
import { render, screen,fireEvent } from '@testing-library/react';

import ButtonWrapper from './ButtonWrapper';

test('handles onClick', () => {   
    const onClick=jest.fn()

  render(<ButtonWrapper onClick={onClick} title="Add Items"/>);
const buttonElement=screen.getByText("Add Items")
 fireEvent.click(buttonElement);
 expect(onClick).toHaveBeenCalledTimes(1)
});
