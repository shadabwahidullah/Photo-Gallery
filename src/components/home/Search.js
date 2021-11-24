import React from 'react';
import { useDispatch } from 'react-redux';
import { filterCollectionsAction } from '../../redux/reducers/collections';

const Search = () => {
  const dispatch = useDispatch();
  const filter = (event) => {
    dispatch(filterCollectionsAction(event.target.value));
  };

  return (
    <div className="row">
      <form>
        <input
          className="form-control m-2"
          placeholder="Search for images"
          onChange={(event) => {
            console.log('the typed in message is ', event.target.value);
            filter(event);
          }}
        />
      </form>
    </div>
  );
};
export default Search;
