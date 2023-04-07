import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

//pages
import HomeIndex from "./Pages/HomeIndex"
import AboutIndex from "./Pages/AboutIndex"
import ShopIndex from "./Pages/ShopIndex"
//notfound
import NotFoundIndex from "./Pages/NotFoundIndex"

function App() {
  const AquaRoutes = [
    {
      name:"Home",
      path:"/",
      component: <HomeIndex/>
    },
    {
      name:"About",
      path:"/about",
      component:<AboutIndex/>
    },
    {
      name:"Not-Found",
      path:"*",
      component:<NotFoundIndex/>
    },
    {
      name:"Shop",
      path:"/shop",
      component:<ShopIndex/>
    }
  ]
  return (
    <Router>
      <Routes>
      {AquaRoutes.map((r,i)=>(
         <Route key={i} path={r.path} element={r.component}/>
      ))}
      </Routes>
    </Router>
  );
}

export default App;
