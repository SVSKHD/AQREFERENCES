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
import CompareIndex from "./Pages/CompareIndex";
import CartIndex from "./Pages/cartIndex";
import LoginIndex from "./Pages/LoginIndex";
import UiIndex from "./Pages/uiIndex";
import DashboardIndex from "./Pages/dashboardIndex";
//notfound
import NotFoundIndex from "./Pages/NotFoundIndex";
//
import IndividualCategoryIndex from "./Pages/indivdualCategoryIndex";
import IndividualProductIndex from "./Pages/IndividualProductIndex";
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
        // console.log("user", user);

        currentUser(idTokenResult.token)
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
          .catch((err) => console.log(err));
      }
    });
    // cleanup
    return () => unsubscribe();
  }, [dispatch]);
  const AquaRoutes = [
    {
      name: "Home",
      path: "/",
      component: <HomeIndex />,
      show: true,
    },
    {
      name: "About",
      path: "/about",
      component: <AboutIndex />,
      show: true,
    },
    {
      name: "Not-Found",
      path: "*",
      component: <NotFoundIndex />,
      show: true,
    },
    {
      name: "Shop",
      path: "/shop",
      component: <ShopIndex />,
      show: true,
    },
    {
      name: "Cart",
      path: "/cart",
      component: <CartIndex />,
      show: true,
    },
    {
      name: "Compare",
      path: "/compare",
      component: <CompareIndex />,
      show: true,
    },
    {
      name: "login",
      path: "/login",
      component: <LoginIndex />,
      show: true,
    },
    {
      name: "Individual-Categories",
      path: "/category/:name",
      component: <IndividualCategoryIndex />,
      show: true,
    },
    {
      name: "Individual-Product",
      path: "/product/:name",
      component: <IndividualProductIndex />,
      show: true,
    },
    {
      name: "ui",
      path: "/ui",
      component: <UiIndex />,
      show: false,
    },
    {
      name: "Dashboard",
      path: "/dashboard/:name",
      component: <DashboardIndex />,
      show: true,
    },
  ];

  useEffect(() => {
    let filteredRoutes = AquaRoutes.filter((a) => a.show == true);
    console.log("filtered", filteredRoutes);
    ReactGA.initialize(process.env.REACT_APP_ANALYTICS);
  }, []);

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
