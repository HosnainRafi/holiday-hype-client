import logo from './logo.svg';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Footer from './Component/Footer/Footer';
import ContactUs from './Component/Contact/ContactUs';
import AboutUs from './Component/About/AboutUs';
import NotFound from './Component/NotFound/NotFound';
import Login from './Component/Login/Login/Login';
import MyOrder from './Component/MyOrders/MyOrder';
import ManageOrder from './Component/ManageAllOrder/ManageOrder';
import AddNewService from './Component/AddNewService/AddNewService';
import PrivateRoute from './Component/Login/PrivateRoute/PrivateRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/contact'>
            <ContactUs></ContactUs>
          </Route>
          <Route path='/about'>
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path='/myOrders'>
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path='/manageOrder'>
            <ManageOrder></ManageOrder>
          </PrivateRoute>
          <PrivateRoute path='/addService'>
            <AddNewService></AddNewService>
          </PrivateRoute>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
  );
}

export default App;
