import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Banner from '../Banner';
import { fetchCollection } from '../../redux/reducers/collection';
import Photo from './media/Photo';
import Video from './media/Video';

const TargetCollection = () => {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collectionReducer);
  const params = useParams();
  useEffect(() => {
    console.log('Use effect called from target collection');
    console.log('target collection is', collection.targetCollection);
    dispatch(fetchCollection(params.collectionId));
  }, []);
  return (
    <div className="">
      <Banner title={params.collectionId} />
      {collection.targetCollection.map((media) => {
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
