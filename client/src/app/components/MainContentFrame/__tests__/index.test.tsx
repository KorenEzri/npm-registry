import * as React from 'react';
import { render } from '@testing-library/react';

import { MainContentFrame } from '..';


describe('<MainContentFrame  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MainContentFrame />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
