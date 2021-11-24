import React from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../Banner';

const TargetCollection = () => {
  const params = useParams();
  return (
    <div className="">
      <Banner title={params.collectionId} />
      Target Collection
    </div>
  );
};

export default TargetCollection;
