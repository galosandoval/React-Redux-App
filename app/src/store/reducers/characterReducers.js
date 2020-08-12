import { DISPLAY_CARDS } from "../actions";

const initialState = {
  characters: "",
  isLoading: "",
  error: "",
};

const characterReducers = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_CARDS:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default characterReducers;
