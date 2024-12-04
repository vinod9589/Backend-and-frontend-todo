import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const todoApiData = createAsyncThunk(
  "user/todoApiData",
  async (data) => {
    try {
      const result = await axios.post(
        "http://localhost:5001/api/testing",
        data
      );
      console.log("data", data);

      return result;
    } catch (error) {
      console.log("post error", error);
    }
  }
);



