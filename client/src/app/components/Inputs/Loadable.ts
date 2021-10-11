/**
*
* Asynchronously loads the component for Inputs
*
*/

import { lazyLoad } from 'utils/loadable';

export const Inputs = lazyLoad(() => import('./index'), module => module.Inputs);