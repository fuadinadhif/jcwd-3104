import { createSlice } from "@reduxjs/toolkit";

const initialState = { value: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
  },
});

/* ----------------------- Final Result of counterSlice ---------------------- */
// const counterSlice = {
//   actions: { increment: () => {}, decrement: () => {} },
//   reducer: {},
// };

/* -------------------- Old way before destructure exist -------------------- */
// const increment = counterSlice.actions.increment
// const decrement = counterSlice.actions.decrement

const { increment, decrement } = counterSlice.actions;

export { increment, decrement };
export default counterSlice.reducer;
