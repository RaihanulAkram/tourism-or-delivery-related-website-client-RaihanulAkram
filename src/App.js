import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import MenuBar from './Pages/Home/Shared/MenuBar/MenuBar'
import Footer from './Pages/Home/Shared/Footer/Footer'
import AddTours from './Pages/AddTours/AddTours';
import MainTours from './Pages/MainTours/MainTours';
import NotFound from './Pages/Home/Shared/NotFound/NotFound';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthProvider from './context/AuthProvider';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import MyOrder from './Pages/MyOrder/MyOrder';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <Router>
          <MenuBar></MenuBar>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route exact path="/tours">
              <MainTours></MainTours>
            </Route>

            <PrivateRoute exact path="/placeOrder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute exact path="/myorders">
              <MyOrder></MyOrder>
            </PrivateRoute>

            <PrivateRoute exact path="/manageallorders">
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>

            <PrivateRoute exact path="/addTours">
              <AddTours></AddTours>
            </PrivateRoute>

            <Route exact path="/login">
              <Login></Login>
            </Route>

            <Route exact path="/register">
              <Register></Register>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;