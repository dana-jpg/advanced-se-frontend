import "./bootstrap-custom.css";
import "./index.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter } from "react-router-dom";
import Header from "./template/Header";
import Footer from "./template/Footer";


library.add(fas, far, fab);

ReactDOM.render(
    <BrowserRouter>
    <Header />
      <App />
    <Footer />
    </BrowserRouter>
  ,
  document.getElementById("root")
);
