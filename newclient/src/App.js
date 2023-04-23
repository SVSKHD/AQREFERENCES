import { useEffect } from "react";
import ReactGA from "react-ga";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//zustand
import useUserStore from "./zustStore/user";
//redux
import { useDispatch } from "react-redux";
//firebase
import { auth } from "./config/firebase";
//services
import { currentUser } from "./services/auth";
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
import UiIndex from "./Pages/uiIndex";
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
  const userStore = useUserStore((state) => state.userData);
  const userDialog = useAuthStore((state) => state.userDialog);
  const userDialogHide = useAuthStore((state) => state.DialogDefault);

  //dispatch redux
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const idTokenResult = await user.getIdTokenResult();
        currentUser(idTokenResult)
          .then((res) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: res.data.name,
                email: res.data.email,
                token: idTokenResult.token,
                role: res.data.role,
                _id: res.data._id,
              },
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
    return () => unsubscribe();
  }, [userStore, userDialog, dispatch]);

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_ANALYTICS);
  }, []);

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
      name: "Individual-Categories",
      path: "/category/:name",
      component: <IndividualCategoryIndex />,
    },
    {
      name: "ui",
      path: "/ui",
      component: <UiIndex />,
      show: process.env.REACT_APP_BUILD,
    },
  ];
  const customToastStyle = {
    borderRadius: "40px",
  };
  return (
    <>
      <AuthCommonDialog show={userDialog} hide={userDialogHide} />
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
