import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./core/Nav";
import Home from "./core/Home";
import Signin from "./user/Signin";
import Signup from "./user/Signup";
import PrivateRoute from "./auth/PrivateRoute";
import UserDashboard from "./user/UserDashBoard";
import AdminRoute from "./auth/AdminRoute";
import AdminDashboard from "./user/AdminDashboard";
import AddCategory from "./admin/AddCategory";
import AddProduct from "./admin/AddProduct";
import Products from "./components/Products";
import { About, Contact, HelpCenter } from "./components/About";
import Footer from "./components/Footer";

const handleRoutes = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/signin" exact element={<Signin />} />
        <Route path="/signup" exact element={<Signup />} />

        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/helpCenter" exact element={<HelpCenter />} />

        <Route
          path="/user/dashboard"
          exact
          element={
            <PrivateRoute>
              <UserDashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/dashboard"
          exact
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/create/category"
          exact
          element={
            <AdminRoute>
              <AddCategory />
            </AdminRoute>
          }
        />
        <Route
          path="/create/product"
          exact
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        <Route path="/products" exact element={<Products />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default handleRoutes;
