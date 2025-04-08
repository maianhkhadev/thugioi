import { render } from '@testing-library/react';

import UiHotNovels from './ui-hot-novels';

describe('UiHotNovels', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiHotNovels />);
    expect(baseElement).toBeTruthy();
  });
});
