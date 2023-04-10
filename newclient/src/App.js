import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//libraries
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//pages
import HomeIndex from "./Pages/HomeIndex"
import AboutIndex from "./Pages/AboutIndex"
import ShopIndex from "./Pages/ShopIndex"
import CartIndex from "./Pages/cartIndex"
//notfound
import NotFoundIndex from "./Pages/NotFoundIndex"

function App() {
  const AquaRoutes = [
    {
      name: "Home",
      path: "/",
      component: <HomeIndex />
    },
    {
      name: "About",
      path: "/about",
      component: <AboutIndex />
    },
    {
      name: "Not-Found",
      path: "*",
      component: <NotFoundIndex />
    },
    {
      name: "Shop",
      path: "/shop",
      component: <ShopIndex />
    },
    {
      name: "Cart",
      path: "/cart",
      component: <CartIndex />
    }
  ]
  const customToastStyle = {
    borderRadius : "40px"
  }
  return (
    <>
    <ToastContainer 
    bodyClassName={customToastStyle}
    autoClose={8000}
    />
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
