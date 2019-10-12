import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import store from "../redux/store";
import Path from "./Path";
import Header from "./Header";
import File from "./File";
import { getFiles } from "../redux/actions/files";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            path: [
                {
                    url: 'name',
                    name: 'name',
                },
                {
                    url: 'name/title',
                    name: 'title',
                },
                {
                    url: 'name/title/dir',
                    name: 'dir',
                },
            ],
            depth: 3
        }
    }

    componentDidMount() {
        const { onGetFiles } = this.props;
        onGetFiles('/');
    }

    render() {
        const { files } = this.props;
        return (
            <Provider store={store}>
                <div>
                    <Header/>
                    <Path path={this.state.path} depth={this.state.depth} />
                    {
                        files.items &&
                        files.items.map((item) => (
                            <File name={item.name} type={item.type} mediaType={item.media_type}/>
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