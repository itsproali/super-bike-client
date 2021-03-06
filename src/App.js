import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import Login from "./components/Login-Register/Login";
import Register from "./components/Login-Register/Register";
import Spinner from "./components/Spinner/Spinner";
import { Toaster } from "react-hot-toast";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ItemDetails from "./components/Items/ItemDetails";
import ManageInventory from "./components/Inventory/ManageInventory";
import EditItem from "./components/Inventory/EditItem";
import AddItem from "./components/Inventory/AddItem";
import MyItem from "./components/MyItem/MyItem";
import NotFound from "./components/NotFound/NotFound";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import "../node_modules/slick-carousel/slick/slick.css";
import "../node_modules/slick-carousel/slick/slick-theme.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/inventories" element={<ManageInventory />}></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/inventory/:id"
          element={
            <RequireAuth>
              <ItemDetails />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/edit/:id"
          element={
            <RequireAuth>
              <EditItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/add"
          element={
            <RequireAuth>
              <AddItem />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/my-items"
          element={
            <RequireAuth>
              <MyItem />
            </RequireAuth>
          }
        ></Route>
        <Route path="/loading" element={<Spinner />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer></Footer>
      <Toaster />
    </div>
  );
}

export default App;
