import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Nav from './core/Nav';
import Home from './core/Home';
import Signin from './user/Signin';
import Signup from './user/Signup';
import UserDashBoard from './user/UserDashBoard';
import PrivateRoute from './auth/PrivateRoute';

const handleRoutes = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/signin' exact element={<Signin />} />
        <Route path='/signup' exact element={<Signup />} />
        <Route path='/dashboard' exact element={<PrivateRoute><UserDashBoard /></PrivateRoute>} />
      </Routes>
    </Router>
  )
}

export default handleRoutes;
