import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import Admin from './components/Admin/Admin';
import Deals from './components/Deals/Deals';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import AddBook from './components/AddBook/AddBook';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Checkout from './components/Checkout/Checkout';
import ManageBooks from './components/ManageBooks/ManageBooks';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <p>{loggedInUser.email}</p>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute path="/orders">
            <Orders></Orders>
          </PrivateRoute>
          <PrivateRoute path="/admin">
            {/* <Admin></Admin> */}
            <AddBook></AddBook>
          </PrivateRoute>
          <PrivateRoute path="/manageBooks">
            <ManageBooks></ManageBooks>
          </PrivateRoute>
          <PrivateRoute path="/checkout/:_id">
               <Checkout></Checkout>
          </PrivateRoute>
          <Route path="/deals">
            <Deals></Deals>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
