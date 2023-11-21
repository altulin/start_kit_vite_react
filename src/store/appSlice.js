import { createSlice } from "@reduxjs/toolkit";

// const body = document.querySelector("body");

const listModal = ["auth"];
const initModal = () => {
  // eslint-disable-next-line no-new-object
  const obj = new Object();
  listModal.forEach((item) => {
    obj[`${item}`] = { step: 0 };
  });

  return obj;
};

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMobileOrTablet: false,
    modalState: {
      auth: { step: 0 },
    },
  },

  reducers: {
    stepTo(state, action) {
      state.modalState = initModal();
      state.modalState[`${action.payload.type}`].step = action.payload.step;
    },

    clearAllStep(state) {
      state.modalState = initModal();
    },

    // setIsMobileOrTablet(state, action) {
    //   state.isMobileOrTablet = action.payload;
    // },
  },
});

export const { stepTo, clearAllStep } = appSlice.actions;
export default appSlice.reducer;
