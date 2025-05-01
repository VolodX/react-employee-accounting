import {Component} from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
	state = {
		name: '',
		salary: ''
	};

  onValueChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
      </div>
    );
  }
}

export default EmployeeAddForm;
