import React, { Component } from "react";
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import PropTypes from 'prop-types';

class Path extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        path: PropTypes.array.isRequired,
        depth: PropTypes.number.isRequired
    }

    componentDidMount()
    {

    }

    render() {
        const { path, depth } = this.props;
        return (
            <div>
                <Breadcrumb>
                {
                    path.map((item, index) => (
                        (
                            depth - 1 !== index ? (
                                <BreadcrumbItem><a href={item.url}>{item.name}</a></BreadcrumbItem>
                            ) : (
                                <BreadcrumbItem active>{item.name}</BreadcrumbItem>
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