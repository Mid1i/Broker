import {BrowserRouter as Router} from "react-router-dom";
import ReactDOM from "react-dom/client";
import React from "react";

import App from "app/App";

import "app/styles/index.scss";


const root = ReactDOM.createRoot(document.querySelector('.wrapper'));

root.render(
    <Router>
        <App/>
    </Router>
);
