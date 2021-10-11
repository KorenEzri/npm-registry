/**
*
* Asynchronously loads the component for MainContentFrame
*
*/

import { lazyLoad } from 'utils/loadable';

export const MainContentFrame = lazyLoad(() => import('./index'), module => module.MainContentFrame);