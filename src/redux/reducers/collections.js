import axios from 'axios';

const FETCH_COLLECTIONS = 'photogallery/collections/FETCH_COLLECTIONS';
const FILTER_COLLECTIONS = 'photogallery/collections/FILTER_COLLECTIONS';

const BASE_URL = 'https://api.pexels.com/v1/collections';
const FEATURED_COLLECTIONS = `${BASE_URL}/featured?per_page=25`;
const AUTHORIZATION_KEY = '563492ad6f91700001000001b58bde28d2164b54989eb54e4a8fbfbd';

export const fetchCollections = () => (dispatch) => {
  axios
    .get(FEATURED_COLLECTIONS, {
      headers: { Authorization: `${AUTHORIZATION_KEY}` },
    })
    .then((response) => {
      const { collections } = response.data;
      dispatch({ type: FETCH_COLLECTIONS, payload: collections });
    });
};

export const filterCollectionsAction = (value) => (dispatch) => {
  dispatch({ type: FILTER_COLLECTIONS, payload: value });
};

const initialState = { Collections: [] };

const collectionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTIONS:
      return { ...state, Collections: action.payload, collections: action.payload };
    case FILTER_COLLECTIONS:
      return {
        ...state,
        Collections: state.collections.filter((collection) => collection.title
          .toLowerCase().includes(action.payload.toLowerCase())),
      };
    default:
      return state;
  }
};

export default collectionsReducer;
