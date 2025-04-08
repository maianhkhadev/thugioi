import { render } from '@testing-library/react';

import DataAccessNovels from './data-access-novels';

describe('DataAccessNovels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessNovels />);
    expect(baseElement).toBeTruthy();
  });
});
