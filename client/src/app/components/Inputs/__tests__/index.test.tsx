import * as React from 'react';
import { render } from '@testing-library/react';

import { Inputs } from '..';


describe('<Inputs  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<Inputs />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
