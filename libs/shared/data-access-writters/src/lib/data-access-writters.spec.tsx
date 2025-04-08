import { render } from '@testing-library/react';

import DataAccessWritters from './data-access-writters';

describe('DataAccessWritters', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessWritters />);
    expect(baseElement).toBeTruthy();
  });
});
