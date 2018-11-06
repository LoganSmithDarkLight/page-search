import React, { Component } from 'react'

class Filter extends Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div className='TriBlock Filter'>
                    <label>
                        Minimum:
                    </label>
                    <input
                    className="MinBar"
                    type='number'
                    value={this.props.searchInfo.payRateMin}
                    onChange={this.props.onChange}
                    name='payRateMin'
                    >
                    </input>
                    <br/>
                    <label>
                        Maximum:
                    </label>
                    <input
                    className="MaxBar"
                    type='number'
                    value={this.props.searchInfo.payRateMax}
                    onChange={this.props.onChange}
                    name='payRateMax'
                    >
                    </input>
                    <br/>
                    <br/>
                    <label>
                        Experience Level:
                    </label>
                    <select
                    className="ExperienceToggle"
                    type='text'
                    value={this.props.searchInfo.experienceLevel}
                    onChange={this.props.onChange}
                    name='experienceLevel'
                    >
                    <option value=''>Any</option>
                    <option value='Junior'>Junior</option>
                    <option value='Mid'>Mid</option>
                    <option value='Senior'>Senior</option>
                    </select>
                    <br/>
                    <br/>
                    <label>
                        Job Type:
                    </label>
                    <select
                    className="TypeToggle"
                    type='text'
                    value={this.props.searchInfo.jobType}
                    onChange={this.props.onChange}
                    name='jobType'
                    >
                    <option value=''>Any</option>
                    <option value='Hourly'>Hourly</option>
                    <option value='Part-Time'>Part-time</option>
                    <option value='Full-Time(40 hrs/wk)'>Full-time</option>
                    </select>
                    <br/>
                    <br/>
                    <label>
                        Country:
                    </label>
                    <input
                    className="CountrySearch"
                    type='text'
                    value={this.props.searchInfo.country}
                    onChange={this.props.onChange}
                    name='country'
                    >
                    </input>
                    <br/>
                    <br/>
                    <label>
                        Language:
                    </label>
                    <input
                    className="LanguageSearch"
                    type='text'
                    value={this.props.searchInfo.languages}
                    onChange={this.props.onChange}
                    name='languages'
                    >
                    </input>
                </div>
        )
    }
}

export default Filter