import React, { Component } from 'react'
import { css } from 'react-emotion';
// First way to import
import { ClipLoader } from 'react-spinners';

class LoadingIcon extends Component {

    constructor() {
        super();
    }

    render() {
        let rotation = 30;
        return (
            <div
                className="LoadingIcon"
            >
                <ClipLoader
                size={300}
                />
            </div>
        )
    }
}

export default LoadingIcon