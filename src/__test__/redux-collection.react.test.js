import collectionReducer from "../redux/reducers/collection";

describe('Redux collection reducer tests', () => {
    test('Collection reducer test', () => {
        expect(collectionReducer(undefined, {})).toEqual({targetCollection:[]});
    })
})