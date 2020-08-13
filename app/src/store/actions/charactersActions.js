import axios from "axios";

export const LOADING_CARDS = "LOADING_CARDS";
export const DISPLAY_CARDS = "DISPLAY_CARDS";

export const fetchCharacters = () => (dispatch) => {
  dispatch({ type: LOADING_CARDS });
  axios
    .get("https://api.jikan.moe/v3/manga/11/characters")
    .then((res) => {
      dispatch({ type: DISPLAY_CARDS, payload: res.data.characters });
    })
    .catch((err) => {
      console.log(err, "lol");
    });
};

const thunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    action(store.dispatch);
  }
};

// export default fetchCharacters

// https://api.jikan.moe/v3/manga/11/characters

// export const fetchMissions = () => (dispatch) => {
//   // dispatch FETCHING action
//   dispatch({ type: FETCHING_MISSIONS_START });
//   // make an axios call
//   axios
//     .get("https://api.spacexdata.com/v3/missions")
//     .then((res) => {
//       // inside .then(), dispatch new action with data
//       // res.data
//       dispatch({ type: FETCH_MISSIONS_SUCCESS, payload: res.data });
//     })
//     .catch((err) => console.log(err));
// };