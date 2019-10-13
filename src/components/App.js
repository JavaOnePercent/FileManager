import React, { Component } from "react";
import { Provider, connect } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import store from "../redux/store";
import Path from "./Path";
import Header from "./Header";
import File from "./File";
import { getFiles } from "../redux/actions/files";

class App extends Component {

    constructor(props) {
        super(props);

        this.setRootRef = this.setRootRef.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    setRootRef(element) {
        this.rootRef = element;
    }

    handleScroll() {
        const { rootRef } = this;
        const { innerHeight, scrollY } = window;
        const { offsetTop, scrollHeight } = rootRef;
        const { files, onGetFiles, location: { pathname: path } } = this.props;
        if (innerHeight + scrollY > (offsetTop + scrollHeight) - 150 && files.currentPage < files.lastPage - 1 && !files.isLoading)
        {
            onGetFiles(path, files.currentPage + 1);
        }
    }

    componentDidMount() {
        const { onGetFiles, location: { pathname: path } } = this.props;
        onGetFiles((path) ? path : '/', 0);
        window.addEventListener('scroll', this.handleScroll, false);
    }

    componentDidUpdate(prevProps) {
        const { onGetFiles, location: { pathname: path } } = this.props;
        const { location: { pathname: prevPath } } = prevProps;

        if (path != prevPath) {
            onGetFiles(path, 0);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll, false);
    }

    render() {
        const { files, location: { pathname: path } } = this.props;
        const { setRootRef } = this;
        return (
            <Provider store={store}>
                <div>
                    <div className="position-fixed w-100 header-container">
                        <Header />
                        <Path path={path} />
                    </div>
                    <div className="row file-list w-100 position-absolute" ref={setRootRef}>
                        {
                            (files.items.length > 0) ? (
                                files.items.map((item, index) => (
                                    <div className="col-md-2" key={index}>
                                        <File name={item.name} type={item.type} mediaType={item.media_type}
                                              path={path} preview={item.preview} isLoading={files.isLoading} />
                                    </div>
                                ))
                            ) : (
                                <div className="col text-center">Папка пустая</div>
                            )
                        }
                    </div>
                </div>
            </Provider>
        );
    }
}

export default connect(
    state => ({ files: state.files }),
    dispatch => ({
        onGetFiles: (path, currentPage) => {
            dispatch(getFiles(path, currentPage));
        }
    })
)(App)