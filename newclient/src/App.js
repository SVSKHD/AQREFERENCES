import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

//pages
import HomeIndex from "./Pages/HomeIndex"
function App() {
  const AquaRoutes = [
    {
      name:"Home",
      path:"/",
      component: <HomeIndex/>
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
