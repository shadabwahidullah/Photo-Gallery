import collectionsReducer from "../redux/reducers/collections";
import { FETCH_COLLECTIONS, FILTER_COLLECTIONS } from "../redux/reducers/collections";

describe("Collections reducer tests: ", () => {
  test("Collections reducer initial state test", () => {
    expect(collectionsReducer(undefined, {})).toEqual({ Collections: [] });
  });

  test("Collection reducer fetch test", () => {
    const action = {
      type: FETCH_COLLECTIONS,
      payload: [{id:'test'}],
    };
    expect(collectionsReducer({Collections:[],collections:[]}, action)).toEqual({
      Collections: [{id:'test'}],
      collections: [{id:'test'}],
    });
  });

  test("Collection reducer filter test", () => {
    const action = {
      type: FILTER_COLLECTIONS,
      payload: 'test',
    };
    expect(collectionsReducer({Collections:[],collections:[{title:'test'}, {title:'some other text'}]}, action)).toEqual({
      Collections: [{title:'test'}],
      collections: [{title:'test'}, {title:'some other text'}],
    });
  });
});
