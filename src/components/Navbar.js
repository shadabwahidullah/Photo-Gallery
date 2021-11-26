import React from 'react';

import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MyNavbar = () => (
  <nav className="navbar pink fixed-top">
    <Link to="/" className="white">
      <FaAngleLeft className="mx-2 fa" />
    </Link>
    <h1 className="col-9 fs-4 fa">Galleries</h1>
    <FaMicrophone className="me-0 fa" />
    <FaCog className="ms-2 me-3 fa" />
  </nav>
);

export default MyNavbar;
