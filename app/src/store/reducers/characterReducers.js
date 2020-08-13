import { LOADING_CARDS, DISPLAY_CARDS } from "../actions";

const initialState = {
  characters: [],
  isLoading: false,
  error: "",
};

export const characterReducers = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_CARDS:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case DISPLAY_CARDS:
      return {
        ...state,
        isLoading: false,
        characters: action.payload
      }
    default:
      return state;
  }
};

