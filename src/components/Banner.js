import React from 'react';

const HomeBanner = (props) => {
  const { title } = props;
  return (
    <div className="home-banner col-12 d-flex flex-column justify-content-center">
      <h1 className="fa align-self-center border border-warning border-3 rounded p-3 banner-title">{title}</h1>
    </div>
  );
};

export default HomeBanner;
