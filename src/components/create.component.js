import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class Create extends Component {
  constructor(props) {
    super(props);
    this.onChangePersonName = this.onChangePersonName.bind(this);
    this.onChangeBusinessName = this.onChangeBusinessName.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      address: ''
    }
  }

  onChangePersonName(e) {
    this.setState({
      name: e.target.value
    });
  }
  onChangeBusinessName(e) {
    this.setState({
      address: e.target.value
    })  
  }

  onSubmit(e) {
    e.preventDefault();
    const obj = [{
      name: this.state.name,
      address: this.state.address
    }];
    fetch('http://localhost:3001/api/user/', {
  method: 'POST',
  mode: 'cors',
        body: JSON.stringify(obj)
});
  }
    

  render() {
    return (
        <div style={{ marginTop: 10 }}>
            <h3 align="center">Add New Business</h3>
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <label>Person Name:  </label>
                    <input 
                      type="text" 
                      className="form-control" 
                      value={this.state.name}
                      onChange={this.onChangePersonName}
                      />
                </div>
                <div className="form-group">
                    <label>Business Name: </label>
                    <input type="text" 
                      className="form-control"
                      value={this.state.address}
                      onChange={this.onChangeBusinessName}
                      />
                </div>
                <div className="form-group">
                    <input type="submit" 
                      value="Add user" 
                      className="btn btn-primary"/>
                </div>
            </form>
        </div>
    )
  }
}