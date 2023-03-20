import Annoucements from "./components/Annoucements";
import Navbar from "./components/Navbar.js";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductList from "./pages/ProductList";
import ProductPage from "./pages/ProductPage";
import Register from "./pages/Register";
import { useNavigate } from "react-router-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";


const App = () => {
  // let navigate = useNavi();

  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/products" element={<ProductList />}/>
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/register" element={user ? <Home/> : <Register />} />
          <Route path="/login" element={user ? <Home/> : <Login />} />
          <Route path="/" element={<Home />}/>
          <Route path="*" element={<h1>Not found...</h1>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
