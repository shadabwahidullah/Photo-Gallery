import React from 'react';

const Photo = (props) => {
  const { photo } = props;
  const { id, photographer, src } = photo;
  const { portrait } = src;

  return (
    <div className="col-6 p-0 pink border border-white border-3" id={id}>
      <img className="col-12" src={portrait} alt={photographer} />
      <h6 className="p-2 fs-5">
        photo by:
        {' '}
        { photographer }
      </h6>
    </div>
  );
};

export default Photo;
