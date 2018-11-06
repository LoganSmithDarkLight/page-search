import React, { Component } from 'react'
import Job from './Job';

class KeywordBar extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='TriBlock'>
                    <form onSubmit={this.props.onClick}>
                        <input
                            className="SearchBar"
                            type='text'
                            value={this.props.searchInfo.keywords}
                            onChange={this.props.onChange}
                            placeholder='Enter Keywords here'
                            name='keywords'
                        >
                        </input>
                        <input
                            onClick={this.props.onClick}
                            className="FetchButton"
                            type='submit'
                        >
                        </input>
                    </form>
                    <br/>
                    <div>
                        <Job jobs={this.props.jobs}></Job>
                    </div>
                </div>
        )
    }
}

export default KeywordBar