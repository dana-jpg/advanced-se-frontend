import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductDetail from "../../../products/detail/ProductDetail";
import Landing from "../../../landing/Landing";
import ProductList from "../../../products/ProductList";
import Login from "../../../pages/Login";
/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reactrouter.com/en/main/start/tutorial 
 */
const AppRouter = () => {
  return (
      <Routes>
        <Route path="/properties" element={<ProductList />}>
        </Route>
        <Route path="/properties/:id" element = {<ProductDetail />}>
        </Route>
        <Route path="/login" element = {<Login />}>
        </Route>
        <Route path="/" element = {<Landing />}>
        </Route>
      </Routes>
  );
};

export default AppRouter;
