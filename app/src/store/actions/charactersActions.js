import axios from 'axios'

export const LOADING_CARDS = 'LOADING_CARDS'
export const DISPLAY_CARDS = 'DISPLAY_CARDS'

const fetchCharacters = (dispatch) => {
  dispatch({ type: LOADING_CARDS })
  axios.get('https://api.jikan.moe/v3/manga/11/characters')
    .then(res => {
      console.log(res)
      dispatch({ type: DISPLAY_CARDS, payload: res.data })
    })
    .catch(err => {
      console.log(err, 'lol')
    })
}

const thunk = (store) => (next) => (action) => {
  if (typeof action === "object") {
    next(action);
  } else if (typeof action === "function") {
    action(store.dispatch);
  }
};