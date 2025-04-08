import { render } from '@testing-library/react';

import UtilAuth from './util-auth';

describe('UtilAuth', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UtilAuth />);
    expect(baseElement).toBeTruthy();
  });
});
