import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Collection from './Collection';
import { fetchCollections } from '../redux/reducers/collections';

const Home = () => {
  const collections = useSelector((state) => state.collectionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('something is happening');
    dispatch(fetchCollections());
  }, []);
  return (
    <div className="col-12 row m-0 mt-5">
      {collections.Collections.map(
        (collection) => (
          <Collection key={collection.id} collectionInfo={collection}>
            collection
          </Collection>
        ),
      )}
    </div>
  );
};

export default Home;
