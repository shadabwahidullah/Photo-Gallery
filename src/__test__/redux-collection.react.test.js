import collectionReducer from "../redux/reducers/collection";
import { FETCH_COLLECTION } from "../redux/reducers/collection";

describe("Redux collection reducer tests", () => {
  test("Collection reducer initial state test", () => {
    expect(collectionReducer(undefined, {})).toEqual({ targetCollection: [] });
  });

  test("Collection reducer fetch test", () => {
    const action = {
      type: FETCH_COLLECTION,
      payload: [{id: 'test'}],
    };
    expect(collectionReducer({targetCollection:{}}, action)).toEqual({
      targetCollection: [{id:'test'}],
    });
  });
});
