import * as React from 'react';
import { render } from '@testing-library/react';

import { MainDataGrid } from '..';


describe('<MainDataGrid  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<MainDataGrid />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
