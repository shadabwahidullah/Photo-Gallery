import axios from 'axios';

const FETCH_COLLECTIONS = 'photogallery/collections/FETCH_COLLECTIONS';

const BASE_URL = 'https://api.pexels.com/v1/collections';
const FEATURED_COLLECTIONS = `${BASE_URL}/featured?per_page=50`;
const AUTHORIZATION_KEY = '563492ad6f91700001000001b58bde28d2164b54989eb54e4a8fbfbd';

export const fetchCollections = () => (dispatch) => {
  console.log('got called');
  axios
    .get(FEATURED_COLLECTIONS, {
      headers: { Authorization: `${AUTHORIZATION_KEY}` },
    })
    .then((response) => {
      console.log('response is ', response.data.collections);
      const { collections } = response.data;
      dispatch({ type: FETCH_COLLECTIONS, payload: collections });
    });
};

const initialState = { Collections: [] };

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS:
      console.log('inside the switch', action.payload);
      return { ...state, Collections: action.payload };
    default:
      return state;
  }
};

export default collectionsReducer;
