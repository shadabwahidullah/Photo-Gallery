import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchCollection } from '../redux/reducers/collection';

const Collection = (props) => {
  const { collectionInfo } = props;
  const {
    id,
    title,
    media_count: media,
    photos_count: photo,
    videos_count: video,
  } = collectionInfo;
  const dispatch = useDispatch();

  const callFetchCollection = (event) => {
    console.log('the event has been invoked: ', event);
    console.log('element parents id is ', event.target.parentElement.id);
    dispatch(fetchCollection(event.target.parentElement.id));
  };
  return (
    <div
      id={id}
      className="col-6 col-md-4 col-lg-3 col-xl-2 border border-white light-pink text-center collection-item d-flex flex-column justify-content-center"
    >
      <h2>{title}</h2>
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
      <button
        type="button"
        onClick={(event) => {
          callFetchCollection(event);
        }}
      >
        click
      </button>
    </div>
  );
};

export default Collection;
