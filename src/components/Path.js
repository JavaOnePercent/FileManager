import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Path extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        path: PropTypes.string.isRequired,
    }

    componentDidMount()
    {

    }

    render() {
        const { path } = this.props;
        const pathParts = path.split('/');
        return (
            <div>
                <Breadcrumb>
                {
                    pathParts.map((item, index) => (
                        (
                            pathParts.length -1 !== index ? (
                                <BreadcrumbItem key={path + index}><Link to={pathParts.slice(0, index + 1).join('/')}>{(item) ? item : '>'}</Link></BreadcrumbItem>
                            ) : (
                                <BreadcrumbItem key={path + index} active>{item}</BreadcrumbItem>
                            )
                        )
                    ))
                }
                </Breadcrumb>
            </div>
        )
    }
}

export default Path;