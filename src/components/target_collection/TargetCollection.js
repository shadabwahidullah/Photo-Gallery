import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Banner';
import { fetchCollection } from '../../redux/reducers/collection';
import Photo from './media/Photo';
import Video from './media/Video';

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
    <div className="">
      <Banner title={collectionName} />
      {collectionReducer.targetCollection.map((media) => {
        if (media.type === 'Photo') {
          return <Photo />;
        } if (media.type === 'Video') {
          return <Video />;
        }
        return null;
      })}
    </div>
  );
};

export default TargetCollection;
