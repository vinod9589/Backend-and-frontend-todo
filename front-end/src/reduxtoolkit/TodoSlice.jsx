import { createSlice } from "@reduxjs/toolkit";
import { DemoDataList } from "../Demo.Data";
import { todoApiData, todoApiGetData } from "./ApiData";

const initialState = {
  value: 0,
  TodoData: DemoDataList,
  users: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  loading: false,
  error: null,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    
    decrement: (state) => {
    
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    addUserTodo: (state, actions) => {
      state.TodoData.push(actions.payload);
    },
    deleteUserTodo: (state, actions) => {
      state.TodoData.splice(actions.payload.index, 1);
    },
    updateUserTodo: (state, actions) => {
      const { index, updatedTodo } = actions.payload;
      state.TodoData[index] = updatedTodo;
    },
  },
  extraReducers: (builder) => {
    builder

      .addCase(todoApiData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(todoApiData.fulfilled, (state, action) => {
        console.log("check", state);
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(todoApiData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    // getData
    // .addCase(todoApiGetData.pending, (state) => {
    //   state.loading = true;
    //   state.error = null;
    // })
    // .addCase(todoApiGetData.fulfilled, (state, action) => {

    //   state.loading = false;
    //   state.users = action.payload;
    // })
    // .addCase(todoApiGetData.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload;
    // })
  },
});

export const {
  increment,
  decrement,
  reset,
  addUserTodo,
  deleteUserTodo,
  updateUserTodo,
} = counterSlice.actions;

export default counterSlice.reducer;
