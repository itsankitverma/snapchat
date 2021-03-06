import { createSlice } from '@reduxjs/toolkit';

export const cameraSlice = createSlice({
  name: 'camera',
  initialState:{
    value:0,
    cameraImage: null
  },
  reducers: {
    setCameraImage: (state, action) => {
      state.cameraImage = action.payload;
    },
    resetCameraImage: (state, action) => {
        state.cameraImage = null
      },
  },
});

export const { setCameraImage, resetCameraImage } = cameraSlice.actions;

export const selectcamera = (state) => state.camera.cameraImage;

export default cameraSlice.reducer;
