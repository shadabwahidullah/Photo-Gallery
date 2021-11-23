import React from 'react';

import { FaAngleLeft, FaMicrophone, FaCog } from 'react-icons/fa';

const MyNavbar = () => (
  <nav className="navbar pink">
    <FaAngleLeft className="ms-3" />
    <h1 className="col-9 fs-4">Galleries</h1>
    <FaMicrophone className="me-0" />
    <FaCog className="ms-2 me-3" />
  </nav>
);

export default MyNavbar;
