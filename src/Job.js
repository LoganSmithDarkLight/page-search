import React, { Component } from 'react'

class Job extends Component {

    constructor() {
        super();
    }

    render() {
        let renderedOutput = this.props.jobs.map((job, i) =>
            <div key={i} className='Jobs'>
                <div>
                    Job Title: {job.rolename}
                </div>
                <div>
                    Company: {job.company}
                </div>
                <div>
                    City: {job.city}
                </div>
                <div>
                    Wage: ${job.rate}/HR
                </div>
                <div>
                    Duration: {job.type}
                </div>
                <div>
                    Experience: {job.experiencelevel}
                </div>
            </div>
        );
        return (
            <div
                className="Job"
            >
                {renderedOutput}
            </div>
        )
    }
}

export default Job