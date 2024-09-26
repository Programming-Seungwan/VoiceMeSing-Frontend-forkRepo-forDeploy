import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface initialStateProp {
  accessToken: string | null;
}

const initialState: initialStateProp = {
  accessToken: null,
};

export const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    replaceAccessTokenState: (prevState, action: PayloadAction<string>) => {
      prevState.accessToken = action.payload;
    },
  },
});

export const { replaceAccessTokenState } = accessTokenSlice.actions;
export default accessTokenSlice.reducer;
