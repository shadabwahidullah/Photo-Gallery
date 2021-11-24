import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Banner';
import { fetchCollection } from '../../redux/reducers/collection';
import Photo from './media/Photo';

const TargetCollection = () => {
  const dispatch = useDispatch();
  const reducers = useSelector((state) => state);
  const { collectionsReducer, collectionReducer } = reducers;
  const { Collections } = collectionsReducer;
  const params = useParams();
  console.log('collection name is ', Collections, params.collectionId);
  const collectionName = Collections.find((col) => col.id === params.collectionId).title;
  console.log('target collection name is ', collectionName);
  console.log('reducers. collectionReducer', collectionReducer.targetCollection);
  useEffect(() => {
    console.log('Use effect called from target collection');
    dispatch(fetchCollection(params.collectionId));
  }, []);
  return (
    <div className="col-12 row m-0">
      <Banner title={collectionName} />
      {collectionReducer.targetCollection.map((media) => {
        if (media.type === 'Photo') {
          return <Photo photo={media} />;
        }
        return null;
      })}
    </div>
  );
};

export default TargetCollection;
