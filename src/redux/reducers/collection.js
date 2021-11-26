import axios from 'axios';

const FETCH_COLLECTION = 'photogallery/collection/FETCH_COLLECTION';
const BASE_URL = 'https://api.pexels.com/v1/collections';
const TARGET_COLLECTION = `${BASE_URL}/`;
const AUTHORIZATION_KEY = '563492ad6f91700001000001b58bde28d2164b54989eb54e4a8fbfbd';

export const fetchCollection = (id) => (dispatch) => {
  axios
    .get(`${TARGET_COLLECTION}${id}?per_page=50`, {
      headers: { Authorization: `${AUTHORIZATION_KEY}` },
    })
    .then((response) => {
      const { media } = response.data;
      dispatch({ type: FETCH_COLLECTION, payload: media });
    });
};

const initialState = { targetCollection: [] };

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      return { ...state, targetCollection: action.payload };
    default:
      return state;
  }
};

export default collectionReducer;
