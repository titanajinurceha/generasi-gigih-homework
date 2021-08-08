import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import trackListSlice from "./tracklistSlice";


export default configureStore({
    reducer: {
        user:  userReducer,
        tracks: trackListSlice
    }
});