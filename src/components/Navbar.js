import React from 'react';

import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

const MyNavbar = () => (
  <nav className="navbar pink fixed-top">
    <FaAngleLeft className="mx-2" />
    <h1 className="col-9 fs-4">Galleries</h1>
    <FaMicrophone className="me-0" />
    <FaCog className="ms-2 me-3" />
  </nav>
);

export default MyNavbar;
