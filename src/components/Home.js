import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Collection from './Collection';
import { fetchCollections } from '../redux/reducers/collections';

const Home = () => {
  useSelector((state) => state.collectionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('something is happening');
    fetchCollections();
  });
  return (
    <div className="col-12 row m-0 mt-5">
      <Collection />
      <Collection />
      <button
        type="button"
        onClick={() => {
          dispatch(fetchCollections());
        }}
      >
        click here
      </button>
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
      <Collection />
    </div>
  );
};

export default Home;
