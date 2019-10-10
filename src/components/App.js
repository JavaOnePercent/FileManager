import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import store from "../redux/store";

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <h1>My React App!</h1>
                </div>
            </Provider>
        );
    }
}

export default connect()(App)