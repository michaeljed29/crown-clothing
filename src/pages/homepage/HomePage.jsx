import React from "react";
import "./HomePage.scss";
import MessengerCustomerChat from "react-messenger-customer-chat";
import MenuList from "../../components/menu-list/menu-list";

const HomePage = () => {
  return (
    <div className="homepage">
      <MenuList />
      <p>Test</p>
      <MessengerCustomerChat
        pageId="Jed-103182668222971"
        appId="3401405209940982"
      />
    </div>
  );
};

export default HomePage;
