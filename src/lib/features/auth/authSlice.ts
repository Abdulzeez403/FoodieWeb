import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUser } from "./model";

interface AuthState {
  data: null | IUser;
  loading: boolean;
  error: string | null;
  currIndex: number;
}

const initialState: AuthState = {
  data: null,
  loading: false,
  error: null,
  currIndex: 0,
};
// creating action-reducer slice
export const AuthSlice = createSlice({
  name: "car_slice",
  initialState,
  reducers: {
    // manage/control the currIndex value
    changeCurrIndex: (state, action: PayloadAction<number>) => {
      state.currIndex = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeCurrIndex } = AuthSlice.actions;

export default AuthSlice.reducer;

// export const signupUser = createAsyncThunk(
//   "auth/signup",
//   async (userData: any) => {
//     const response = await axios.post(
//       `${process.env.NEXT_BACKEND_URL}/api/user`
//     );
//     return response.data;
//   }
// );
