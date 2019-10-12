import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import store from "../redux/store";
import Path from "./Path";
import Header from "./Header";
import File from "./File";
import { getFiles } from "../redux/actions/files";

class App extends Component {
    componentDidMount() {
        const { onGetFiles, location: {pathname: path} } = this.props;
        onGetFiles((path) ? path : '/');
    }

    componentDidUpdate(prevProps) {
        const { onGetFiles, location: {pathname: path} } = this.props;
        const { location: {pathname: prevPath} } = prevProps;

        if (path != prevPath) {
            onGetFiles(path);
        }
    }

    render() {
        const { files, location: {pathname: path} } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <Path path={path} />
                    {
                        files.items &&
                        files.items.map((item) => (
                            <File name={item.name} type={item.type} mediaType={item.media_type} path={path}/>
                        ))
                    }
                </div>
            </Provider>
        );
    }
}

export default connect(
    state => ({files: state.files}),
    dispatch => ({
        onGetFiles: (path) => {
            dispatch(getFiles(path));
        }
    })
)(App)