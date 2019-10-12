import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App.js";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <div>
                <Route path="/" component={App} />
            </div>
        </BrowserRouter>
    </Provider>,
    document.getElementById("root"));