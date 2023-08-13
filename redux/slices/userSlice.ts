import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios';

enum Status {
      LOADING = 'loading',
      SUCCESS = 'success',
      ERROR = 'error',
}

export type LoginData = {
      email: string;
      password: string;
};

export type RegisterData = {
      name: string;
      email: string;
      password: string;
};

export type UserData = {
      name: string;
      email: string;
      token: string;
      userPosts: [];
      _id: string
};

type userSlice = {
      data: UserData | null,
      status: Status
};

export const fetchAuth = createAsyncThunk<LoginData, LoginData>('/auth/fetchUserData', async (params) => {
      const { data } = await axios.post<LoginData>("/auth/login", params);
      console.log(data);
      return data;
});

export const fetchRegister = createAsyncThunk<RegisterData, RegisterData>('/auth/fetchRegister', async (params) => {
      const { data } = await axios.post<RegisterData>("auth/register", params);
      return data;
});

export const fetchAuthMe = createAsyncThunk<LoginData>('/auth/fetchAuthMe', async () => {
      const { data } = await axios.get<LoginData>("/auth/me");
      return data;
});

const initialState: userSlice = {
      data: null,
      status: Status.LOADING,
}

const userSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
            logout: (state) => {
                  state.data = null;
                  window.localStorage.removeItem('token');
            }
      },
      extraReducers: (builder) => {
            builder.addCase(fetchAuth.pending, (state) => {
                  state.status = Status.LOADING;
                  state.data = null;
            }),
                  builder.addCase(fetchAuth.fulfilled, (state, action: any) => {
                        state.status = Status.SUCCESS;
                        state.data = action.payload;
                  }),
                  builder.addCase(fetchAuth.rejected, (state) => {
                        state.status = Status.ERROR;
                        state.data = null;
                  }),

                  builder.addCase(fetchAuthMe.pending, (state) => {
                        state.status = Status.LOADING;
                        state.data = null;
                  }),
                  builder.addCase(fetchAuthMe.fulfilled, (state, action: any) => {
                        state.status = Status.SUCCESS;
                        state.data = action.payload;
                  }),
                  builder.addCase(fetchAuthMe.rejected, (state) => {
                        state.status = Status.ERROR;
                        state.data = null;
                  }),

                  builder.addCase(fetchRegister.pending, (state) => {
                        state.status = Status.LOADING;
                        state.data = null;
                  }),
                  builder.addCase(fetchRegister.fulfilled, (state, action: any) => {
                        state.status = Status.SUCCESS;
                        state.data = action.payload;
                  }),
                  builder.addCase(fetchRegister.rejected, (state) => {
                        state.status = Status.ERROR;
                        state.data = null;
                  })
      }
});

export const selectIsAuth = (state: { auth: { data: any; }; }) => Boolean(state.auth.data);

export const { logout } = userSlice.actions;

export default userSlice.reducer;