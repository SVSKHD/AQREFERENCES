import { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//zustand
import useUserStore from "./zustStore/user";

//libraries
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-multi-carousel/lib/styles.css";
//pages
import HomeIndex from "./Pages/HomeIndex";
import AboutIndex from "./Pages/AboutIndex";
import ShopIndex from "./Pages/ShopIndex";
import CartIndex from "./Pages/cartIndex";
import LoginIndex from "./Pages/LoginIndex";
//notfound
import NotFoundIndex from "./Pages/NotFoundIndex";
//
import IndividualCategoryIndex from "./Pages/indivdualCategoryIndex";
//resuables
import AuthCommonDialog from "./PageComponents/Auth/AuthCommonDialog";
import AuthDrawer from "./PageComponents/AuthDrawer/AuthDrawer";

//Store
import useAuthStore from "./zustStore/Auth";

//storevariabels



function App() {
  const userStore = useUserStore((state)=>state.userData)
  const userDialog = useAuthStore((state) => state.userDialog);
  const userDialogHide = useAuthStore((state)=>state.DialogDefault)

  useEffect(() => {
    userDialog?console.log("hello") :console.log("no hello")
    ReactGA.initialize(process.env.REACT_APP_ANALYTICS);
  }, [userStore , userDialog]);

  const AquaRoutes = [
    {
      name: "Home",
      path: "/",
      component: <HomeIndex />,
    },
    {
      name: "About",
      path: "/about",
      component: <AboutIndex />,
    },
    {
      name: "Not-Found",
      path: "*",
      component: <NotFoundIndex />,
    },
    {
      name: "Shop",
      path: "/shop",
      component: <ShopIndex />,
    },
    {
      name: "Cart",
      path: "/cart",
      component: <CartIndex />,
    },
    {
      name: "login",
      path: "/login",
      component: <LoginIndex />,
    },
    {
      name:"Individual-Categories",
      path:"/category/:name",
      component:<IndividualCategoryIndex/>
    }
  ];
  const customToastStyle = {
    borderRadius: "40px",
  };
  return (
    <>
      <AuthCommonDialog show={userDialog} hide={userDialogHide}/>
      <ToastContainer bodyClassName={customToastStyle} autoClose={8000} />
      <Router>
        <Routes>
          {AquaRoutes.map((r, i) => (
            <Route key={i} path={r.path} element={r.component} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
