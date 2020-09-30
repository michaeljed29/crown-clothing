import React from "react";
import "./HomePage.scss";
import MessengerCustomerChat from "react-messenger-customer-chat";
import MenuList from "../../components/menu-list/menu-list";

const HomePage = () => {
  return (
    <div className="homepage">
      <MenuList />
      <MessengerCustomerChat pageId="103182668222971" />
    </div>
  );
};

export default HomePage;
