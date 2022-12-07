import Topbar from "./components/topbar/Topbar"
import Home from "../src/components/pages/home/Home"
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Single from "./components/pages/single/Single";
import Write from "./components/pages/write/Write";
import { BrowserRouter ,  Route,Routes } from "react-router-dom";
function App() {
  const currentUser = true;
  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home/>}>
          
        </Route>
        <Route path="/posts" element={<Home />}>
          
        </Route>
        <Route path="/register"  element={<Register/>}>
        
        </Route>
        <Route path="/about"  element={<Single />}>
        
        </Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/post/:id" element={<Single/>}>
      
        </Route>
        <Route path="/contact"  element={<Login />}>
        
        </Route>
        <Route path="/write" element={<Write/>}></Route>
        <Route path="/settings" element={<Settings/>}>
        
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
