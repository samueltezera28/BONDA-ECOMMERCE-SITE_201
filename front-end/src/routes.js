import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Nav from './core/Nav';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import PrivateRoute from './auth/PrivateRoute';
import UserDashboard from './user/UserDashboard';
import AdminRoute from './auth/AdminRoute';
import AdminDashboard from './user/AdminDashboard';
import AddCategory from './admin/AddCategory';
import AddProduct from './admin/AddProduct';
import Products from './components/Products';
import Footer from './components/Footer';
import Test from './pages/test';

const handleRoutes = () => {
  return (
    <div className='page-container'>
      <div className='content-wrapper'>
        <Router>
          <Nav />
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/signin' exact element={<Signin />} />
            <Route path='/signup' exact element={<Signup />} />
            <Route path='/user/dashboard' exact element={<PrivateRoute><UserDashboard /></PrivateRoute>} />
            <Route path='/admin/dashboard' exact element={<AdminRoute><AdminDashboard /></AdminRoute>} />
            <Route path='/create/category' exact element={<AdminRoute><AddCategory /></AdminRoute>} />
            <Route path='/create/product' exact element={<AdminRoute><AddProduct /></AdminRoute>} />
            <Route path='/products' exact element={<Products />} />
            <Route path='/test' exact element={<Test />} />
          </Routes>
              
        </Router>
      </div>
      <Footer />
    </div>
  )
}

export default handleRoutes;
