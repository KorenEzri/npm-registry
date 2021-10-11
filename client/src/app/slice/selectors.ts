import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.search || initialState;

export const selectSearch = createSelector(
  [selectSlice],
  state => state,
);
