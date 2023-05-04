import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DefaultCardWithShadow from "../../Components/cards/defaultCardMatterShadow";

const UserCartAndWish = (props) => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Cart">
        <DefaultCardWithShadow>{props.cart}</DefaultCardWithShadow>
      </Tab>
      <Tab eventKey="profile" title="WishList">
        <DefaultCardWithShadow>{props.wishlist}</DefaultCardWithShadow>
      </Tab>
      <Tab eventKey="longer-tab" title="Trending">
        <DefaultCardWithShadow>{props.Trending}</DefaultCardWithShadow>
      </Tab>
    </Tabs>
  );
};

export default UserCartAndWish;
