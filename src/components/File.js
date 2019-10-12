import React, { Component } from "react";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFileAudio, faArchive, faBook, faFileArchive, faDatabase, faFileCode, faCompactDisc,
    faFileWord, faCode, faDiceFive, faPhotoVideo, faFont, faFileImage, faTools, faFileExcel,
    faFileAlt, faFile, faVideo, faFileInvoice, faDirections, faFolder
} from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';

class File extends Component {
    constructor(props) {
        super(props);
        this.state = {
            icons: {
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
            },
        }
    }

    static propTypes = {
        path: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        mediaType: PropTypes.string
    }

    render() {
        const { path, name, type, mediaType } = this.props;
        return (
            <div className="d-inline-flex flex-column w-auto p-2">
                <div className="d-inline-flex justify-content-center">
                    {type === 'dir' ? (
                        <Link to={((path == '/') ? '' : path) + '/' + name}>
                            <FontAwesomeIcon icon={this.state.icons[type]} size="4x"></FontAwesomeIcon>
                        </Link>
                    ) : (
                        <FontAwesomeIcon icon={this.state.icons[(mediaType) ? mediaType : 'unknown']} size="4x"></FontAwesomeIcon>
                    )}
                </div>
                <div className="d-inline-flex flex-column w-auto p-2">{name}</div>
            </div>
        )
    }
}

export default File;