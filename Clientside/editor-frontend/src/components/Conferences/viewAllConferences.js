import React, { Component } from 'react';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-';
import { Table } from 'react-bootstrap';
import axios from 'axios';
import { Button } from 'react-bootstrap';

class GetAllConferences extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            conferences: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/conference/')
        .then(response => {
            // console.log('products', response.data);
            this.setState({ conferences: response.data.data})
        })
    }

  render() {
      return (
        <div className="container">
            <h1>Conferences</h1>
          <Table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Start Date</th>
                <th>Venue</th>
                <th>Type</th>
                <th>Description</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
            {this.state.conferences.length > 0 && this.state.conferences.map((conference, index) => (
              <tr
                key={index}
                data-toggle="collapse"
                data-target="#demo1"
                className="accordion-toggle"
              >
                <td>{conference.con_title}</td>
                <td>{conference.con_startdate}</td>
                <td>{conference.con_enddate}</td>
                <td>{conference.con_starttime}</td>
                <td>{conference.con_venue}</td>
                <td>{conference.con_type}</td>
                <td>{conference.con_des}</td>
                <td><Button variant="primary">Edit</Button></td>
                <td><Button variant="danger">Delete</Button></td>
                </tr>
              
              ))}
              
            </tbody>
          </Table>

        </div>
      );
  }
}



export default GetAllConferences;