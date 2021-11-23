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
    <div id={id} className="col-6 col-md-4 col-lg-3 col-xl-2 border border-white light-pink text-center collection-item d-flex flex-column justify-content-center">
      <h2>{title}</h2>
      <h4>
        Total:
        {media}
      </h4>
      <h4>
        Images:
        {photo}
      </h4>
      <h4>
        Videos:
        {video}
      </h4>
    </div>
  );
};

export default Collection;
