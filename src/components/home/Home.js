import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';
import Collection from '../Collection';
import { fetchCollections } from '../../redux/reducers/collections';
import HomeBanner from '../Banner';
import Search from './Search';

const Home = () => {
  const collections = useSelector((state) => state.collectionsReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('something is happening');
    dispatch(fetchCollections());
  }, []);
  return (
    <div className="col-12 row m-0 mt-5">
      <HomeBanner title="Photo Collections Gallery" />
      <Search />
      {collections.Collections.map(
        (collection) => (
          <Link key={collection.id} to={`/target/${collection.id}`} className="col-6 col-md-4 col-lg-3 col-xl-2 p-0">
            <Collection key={collection.id} collectionInfo={collection}>
              collection
            </Collection>
          </Link>
        ),
      )}
      <Outlet />
    </div>
  );
};

export default Home;
