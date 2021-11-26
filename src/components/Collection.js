import React from 'react';

const Collection = (props) => {
  const { collectionInfo } = props;
  const {
    id,
    title,
    photos_count: photo,
  } = collectionInfo;

  return (
    <div
      id={id}
      className="border border-white light-pink text-center collection-item d-flex flex-column justify-content-center"
    >
      <h1>
        {title}
      </h1>
      <span className="align-bottom">
        <p className="m-0">
          Images:
          {photo}
        </p>
      </span>
    </div>
  );
};

export default Collection;
