import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SearchSliceState {
      findItems: any;
}

const initialState: SearchSliceState = {
      findItems: [],
};

export const searchSlice = createSlice({
      name: "search",
      initialState,
      reducers: {
            setFindItems: (state, action: PayloadAction<any>) => {
                  state.findItems = action.payload;
            },
      },
});

export const { setFindItems } = searchSlice.actions;

export default searchSlice.reducer;