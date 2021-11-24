import React from 'react';

const Collection = (props) => {
  const { collectionInfo } = props;
  const {
    id,
    title,
    media_count: media,
    photos_count: photo,
    videos_count: video,
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
          Media in total:
          {media}
        </p>
        <p className="m-0">
          Images:
          {photo}
          {'  '}
          Videos:
          {video}
        </p>
      </span>
    </div>
  );
};

export default Collection;
