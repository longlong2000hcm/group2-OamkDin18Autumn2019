import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from "axios";
import LandingPage from "./components/LandingPage";
import Register from "./components/Register";
import Login from "./components/Login";
import SearchPage from "./components/SearchPage";
import ProductPage from "./components/ProductPage";
import BasketPage from "./components/BasketPage";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        username: "",
        password: ""
      }
    };
  }

  handleSubmit = (un, pw) => {
    // console.log(this.state.user);
    console.log(un);
    console.log(pw);

    const user = {
      username: un,
      password: pw
    };

    axios
      .post(`http://localhost:3000/v1/user/login`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log(this.state.user);
        this.setState({
          user: {
            username: un,
            password: pw
          }
        });
        // console.log(this.state.user);
      })
      .catch(err => {
        console.log(err);
        return null;
      });
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <Route
            path="/"
            exact
            render={routerProps => <LandingPage {...routerProps} />}
          />
          <Route
            path="/register"
            exact
            render={routerProps => <Register {...routerProps} />}
          />
          <Route
            path="/search"
            exact
            render={routerProps => <SearchPage {...routerProps} />}
          />
          <Route
            path="/product/:id"
            exact
            render={routerProps => <ProductPage {...routerProps} />}
          />
          <Route
            path="/login"
            exact
            render={routerProps => (
              <Login
                {...routerProps}
                user={this.state.user}
                handleSubmit={this.handleSubmit}
                handleClick={this.handleClick}
              />
            )}
          />

          <Route
            path="/basket"
            exact
            render={routerProps => <BasketPage {...routerProps} />}
          />
          {/* 
          <Route
            path="/profile"
            exact render={(routerProps ) => <ProfilePage  />} />  
          <Route
            path="/admin"
            exact render={(routerProps ) => <AdminPage  />} />
             */}
        </Router>
      </React.Fragment>
    );
  }
}
