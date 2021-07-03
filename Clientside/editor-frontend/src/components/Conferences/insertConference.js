import React, { Component } from "react";
import axios from 'axios';
//import Select from 'react-select';

const initialState = {
    conferenceTitle: '',
    conferenceStartDate: '',
    conferenceEndDate: '',
    conferenceStartTime: '',
    conferenceVenue: '',
    conferenceType: '',
    conferenceDes: ''
}

class InsertConference extends Component {
    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = initialState;
    }
    
    
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    
    onSubmit(e) {
        e.preventDefault();
        let conference = {
            con_title: this.state.conferenceTitle,
            con_startdate: this.state.conferenceStartDate,
            con_enddate: this.state.conferenceEndDate,
            con_starttime: this.state.conferenceStartTime,
            con_venue: this.state.conferenceVenue,
            con_type: this.state.conferenceType,
            con_des: this.state.conferenceDes
        }
        console.log('Data to Send', conference);
    
        axios.post('http://localhost:8080/conference/create', conference)
            .then(response => {
                alert('Data successfully inserted');
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error.message);
                alert(error.message)
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Insert Conference</h1>
                <form onSubmit={this.onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="conferenceTitle" className="form-label">Conference Title</label>
                        <input type="text" className="form-control" id="conferenceTitle" name="conferenceTitle" placeholder="Enter Conference Title" value={this.state.conferenceTitle} onChange={this.onChange} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conferenceStartDate" className="form-label">Conference StartDate</label>
                        <input type="date" className="form-control" id="conferenceStartDate" name="conferenceStartDate" placeholder="Enter Conference StartDate" value={this.state.conferenceStartDate} onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conferenceEndDate" className="form-label">Conference EndDate</label>
                        <input type="date" className="form-control" id="conferenceEndDate" name="conferenceEndDate" placeholder="Enter Conference EndDate" value={this.state.conferenceEndDate} onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conferenceStartTime" className="form-label">Conference StartTime</label>
                        <input type="text" className="form-control" id="conferenceStartTime" name="conferenceStartTime" placeholder="Enter Conference StartTime" value={this.state.conferenceStartTime} onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conferenceVenue" className="form-label">Conference Venue</label>
                        <input type="text" className="form-control" id="conferenceVenue" name="conferenceVenue" placeholder="Enter Conference Venue" value={this.state.conferenceVenue} onChange={this.onChange}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conferenceType" className="form-label">Conference Type</label>
                        <select className="form-select" aria-label="Default select example" id="conferenceType" name="conferenceType" value={this.state.conferenceType} onChange={this.onChange}>
                            <option selected>Select Conference Type</option>
                            <option value="Type 1">Type 1</option>
                            <option value="Type 2">Type 2</option>
                            <option value="Type 3">Type 3</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="conferenceDes" className="form-label">Conference Description</label>
                        <input type="textarea" className="form-control" id="conferenceDes" name="conferenceDes" placeholder="Enter Conference Description..." value={this.state.conferenceDes} onChange={this.onChange}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}
export default InsertConference;
