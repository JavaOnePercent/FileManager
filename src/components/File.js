import React, { Component } from "react";
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFile} from "@fortawesome/free-solid-svg-icons";

class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: [
                {
                    audio: 'fas fa-file-audio',
                    backup: 'fas fa-archive',
                    book:  'fas fa-book',
                    compressed: 'fas fa-file-archive',
                    data: 'fas fa-database',
                    development: 'fas fa-file-code',
                    diskimage: 'fas fa-compact-disc',
                    document: 'fas fa-file-word',
                    encoded: 'fas fa-codepen',
                    executable: 'fas fa-dice-five',
                    flash: 'fas fa-photo-video',
                    font: 'fas fa-font',
                    image: 'fas fa-file-image',
                    settings: 'fas fa-tools',
                    spreadsheet: 'fas fa-file-excel',
                    text: 'fas fa-file-alt',
                    unknown: 'fas fa-file',
                    video: 'fas fa-file-video',
                    web: 'file-invoice',
                    dir: 'fas fa-folder'
                },
            ]
        }
    }

    static propTypes = {
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        mediaType: PropTypes.string.isRequired
    }

    componentDidMount()
    {

    }

    render() {
        const { name, type, mediaType } = this.props;
        return (
            <div className="d-inline-flex flex-column w-auto p-2">
                <div className="d-inline-flex justify-content-center">
                    <FontAwesomeIcon icon={faFile} size="5x"></FontAwesomeIcon>
                </div>
                <div>{name}</div>
            </div>
        )
    }
}

export default File;