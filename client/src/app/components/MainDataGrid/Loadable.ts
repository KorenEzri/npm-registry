/**
*
* Asynchronously loads the component for MainDataGrid
*
*/

import { lazyLoad } from 'utils/loadable';

export const MainDataGrid = lazyLoad(() => import('./index'), module => module.MainDataGrid);