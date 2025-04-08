import { render } from '@testing-library/react';

import DataAccessCategories from './data-access-categories';

describe('DataAccessCategories', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessCategories />);
    expect(baseElement).toBeTruthy();
  });
});
