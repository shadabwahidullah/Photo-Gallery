const FETCH_COLLECTION = 'photogallery/collection/FETCH_COLLECTION';

export const fetchCollection = (id) => (dispatch) => {
  dispatch({ type: FETCH_COLLECTION, payload: id });
};

const initialState = {};

const collectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COLLECTION:
      console.log('the fetched collection id is: ', action.payload);
      return state;
    default:
      return state;
  }
};

export default collectionReducer;
