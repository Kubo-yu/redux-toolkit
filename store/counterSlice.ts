import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // 状態のリセットは初期値をreturnする。
    // https://redux-toolkit.js.org/usage/immer-reducers#resetting-and-replacing-state
    // signoutなどで状態を初期化したいときは初期値をreturn
    reset: () => {
      return initialState;
    },
  },
});


export const { increment, decrement, incrementByAmount, reset } = counterSlice.actions;

export const selectCount = (state: any) => state.counter.value;

export default counterSlice.reducer;