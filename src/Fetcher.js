import React, { Component } from 'react'
import LoadingIcon from './LoadingIcon';
import Filter from './Filter'
import KeywordBar from './KeywordBar';

const APIKeywords = 'https://hubstaffapi.herokuapp.com/jobs?keywords='
const APISkills = '&skills='
const APIAvailability = '&availability='
const APIJobType = '&jobType='
const APIPayRate = '&payRate='
const APIExperienceLevel = '&experienceLevel='
const APICountry = '&country='
const APILanguages = '&languages=';

class FetchBar extends Component {

    constructor() {
        super();
        this.state = {
            jobs: [],
            searchInfo: {
                keywords: '',
                skills: [],
                availability: '',
                jobType: '',
                payRateMin: '0',
                payRateMax: '40',
                experienceLevel: '',
                country: '',
                languages: ''
            },
            isLoading: false,
        }
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    fetcher() {
        this.setState({ isLoading: true }, function () {
        });
        let APIOverallSkills = '';
        this.state.searchInfo.skills.forEach(function(skill){
            APIOverallSkills=APIOverallSkills+APISkills+skill;
        });
        fetch(
            APIKeywords + this.state.searchInfo.keywords + APISkills + this.state.searchInfo.skills + APIAvailability + this.state.searchInfo.availability + APIJobType + this.state.searchInfo.jobType + APIPayRate + this.state.searchInfo.payRateMin + ',' + this.state.searchInfo.payRateMax + APIExperienceLevel + this.state.searchInfo.experienceLevel + APICountry + this.state.searchInfo.country + APILanguages + this.state.searchInfo.languages
        ).then(response => { return response.json(); }).then(data => {
            this.setState({ jobs: data, isLoading: false });
            console.log(this.state.jobs);
        });
    }

    handleSearchChange(event) {
        let value = event.target.value;
        let toChange = event.target.name;
        console.log(toChange);
        this.setState(prevState => ({
            searchInfo: {
                ...prevState.searchInfo,
                [toChange]: value
            }
        }))
    }

    render() {
        if (this.state.isLoading) {
            return (
                <LoadingIcon/>
            )
        }
        return (
            <div>
                <Filter 
                searchInfo={this.state.searchInfo}
                onChange={this.handleSearchChange}
                />
                <KeywordBar
                searchInfo={this.state.searchInfo}
                onChange={this.handleSearchChange}
                onClick={this.fetcher.bind(this)}
                jobs={this.state.jobs}
                />
                <div className='TriBlock'>
                </div>
            </div>
        )
    }
}

export default FetchBar