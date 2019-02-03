import React, { Component } from 'react';

import TableRows from './TableRows';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
export default class Index extends Component {
constructor(props) {
      super(props);
    this.state = {
      business: []
    };
  }

  // Fetch the list on first mount
  componentDidMount() {
    this.getList();
  }

 // Retrieves the list of items from the Express app
  getList = () => {
    fetch('http://localhost:3001/api/user')
    .then((response) => response.json())
.then((response)=> {
  console.log(response);
  this.setState({ business: response });
  
});

}
  
    tabRow(){
      return this.state.business.map(function(object, i){
          return <TableRows obj={object} key={i} />;
      });
    }

    render() {
      return (
        <Paper>
        <br/>
      <Table>
          <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Address</TableCell>
            
            </TableRow>
        </TableHead>
        <TableBody>
              { this.tabRow() }
           </TableBody>
      </Table>
    </Paper>
      );
    }
  }