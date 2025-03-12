import { Routes } from "react-router-dom";
import Navbar from "./components/Navbar"
import { Route } from "react-router-dom";
import Home from "./pages/Home"
import Cart from "./pages/Cart"

const App = () => {
  return (<div>
        <div className="bg-slate-900">
          <Navbar/>
        </div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
  </div>)
};

export default App;


// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Shristikumari24/Ecommerce_Website.git
// git push -u origin main