import React from "react";
import "./HomePage.scss";
import MessengerCustomerChat from "react-messenger-customer-chat";
import MenuList from "../../components/menu-list/menu-list";

const HomePage = () => {
  return (
    <div className="homepage">
      <MenuList />
      <p>Nice One</p>
      <MessengerCustomerChat pageId="103182668222971" />
      {/* <div class="fb-customerchat" page_id="103182668222971"></div> */}
    </div>
  );
};

export default HomePage;
