import axios from 'axios'

const DISPLAY_CARDS = 'DISPLAY_CARDS'

const fetchCharacters = (dispatch) => {
  dispatch({ DISPLAY_CARDS })
  axios.get('https://api.jikan.moe/v3/manga/11/characters')
    .then(res => {
      console.log(res)
    })
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    action(store.dispatch);
  }
};