import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { SearchState } from './types';
import { IPackage } from 'types';

export const initialState: SearchState = {
  searches: [],
};

const slice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addToHistory(state, action: PayloadAction<IPackage>) {
      state.searches.push(action.payload);
    },
    removeFromHistory(state, action: PayloadAction) {
      if (state.searches.length > 1) state.searches.pop();
    },
  },
});

export const { actions: searchActions } = slice;

export const useSearchSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
