import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
class TableRows extends Component {

  constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        /*axios.get('http://localhost:4000/business/delete/'+this.props.obj._id)
            .then(console.log('Deleted'))
            .catch(err => console.log(err))
 <TableCell align="right">
            <Link to={"/edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
          &nbsp;<button onClick={this.delete} className="btn btn-danger">Delete</button>
          </TableCell>
            */
    }
  render() {
    return (
        <TableRow key={this.props.obj.id}>
          <TableCell align="right">
            {this.props.obj.name}
          </TableCell>
          <TableCell align="right">
            {this.props.obj.address}
          </TableCell>

       </TableRow>
    );
  }
}

export default TableRows;