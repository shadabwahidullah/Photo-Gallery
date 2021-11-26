import collectionsReducer from "../redux/reducers/collections";

describe('Collections reducer tests: ', () => {
    test('Collections reducer initial state test', () => {
        expect(collectionsReducer(undefined, {})).toEqual({Collections:[]});
    })
})