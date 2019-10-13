import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileAudio, faArchive, faBook, faFileArchive, faDatabase, faFileCode, faCompactDisc,
    faFileWord, faCode, faDiceFive, faPhotoVideo, faFont, faFileImage, faTools, faFileExcel,
    faFileAlt, faFile, faVideo, faFileInvoice, faFolder
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

const maxFileLength = 22;
const icons = {
    audio: faFileAudio,
    backup: faArchive,
    book: faBook,
    compressed: faFileArchive,
    data: faDatabase,
    development: faFileCode,
    diskimage: faCompactDisc,
    document: faFileWord,
    encoded: faCode,
    executable: faDiceFive,
    flash: faPhotoVideo,
    font: faFont,
    image: faFileImage,
    settings: faTools,
    spreadsheet: faFileExcel,
    text: faFileAlt,
    unknown: faFile,
    video: faVideo,
    web: faFileInvoice,
    dir: faFolder
};

class File extends Component {
    static propTypes = {
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        mediaType: PropTypes.string,
        isLoading: PropTypes.bool.isRequired
    }

    getShortedName(type, name) {
        if (name.length < maxFileLength) {
            return name;
        }

        if (type == 'dir')
        {
            return name.slice(0, maxFileLength - 3) + '...'
        }

        const pointIndex = name.lastIndexOf('.');
        const extensionLength = name.length - pointIndex

        return name.slice(0, maxFileLength - extensionLength - 3) + '..' + name.slice(pointIndex, name.length)
    }

    render() {
        const { path, name, type, mediaType, isLoading } = this.props;
        return (
            <div className="d-inline-flex flex-column w-100 overflow-hidden">
                <div className="d-inline-flex justify-content-center">
                    {type === 'dir' ? (
                        !isLoading ? (
                            <Link to={((path === '/') ? '' : path) + '/' + name}>
                                <FontAwesomeIcon color="black" icon={icons[type]} size="4x"></FontAwesomeIcon>
                            </Link>
                        ) : (
                            <FontAwesomeIcon icon={icons[type]} size="4x"></FontAwesomeIcon>
                        )
                    ) : (
                        <FontAwesomeIcon icon={icons[(mediaType) ? mediaType : 'unknown']} size="4x"></FontAwesomeIcon>
                    )}
                </div>
                <div className="d-inline-flex justify-content-center w-100 py-2">{this.getShortedName(type, name)}</div>
            </div>
        )
    }
}

export default File