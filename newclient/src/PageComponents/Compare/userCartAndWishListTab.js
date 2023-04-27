import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import DefaultCardWithShadow from "../../Components/cards/defaultCardMatterShadow";

const UserCartAndWish = () => {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Cart">
        <DefaultCardWithShadow>
        <h1>Tab1</h1>
        </DefaultCardWithShadow>
      </Tab>
      <Tab eventKey="profile" title="WishList">
        <DefaultCardWithShadow>
        <h1>Tab2</h1>
        </DefaultCardWithShadow>
      </Tab>
      <Tab eventKey="longer-tab" title="Trending">
      <DefaultCardWithShadow>
        <h1>Tab3</h1>
        </DefaultCardWithShadow>
      </Tab>
    </Tabs>
  );
};

export default UserCartAndWish;
