import React from "react";
import "./HomePage.scss";

import MenuList from "../../components/menu-list/menu-list";

const HomePage = () => {
  return (
    <div className="homepage">
      <MenuList />
      <p>Test deploy</p>
    </div>
  );
};

export default HomePage;
