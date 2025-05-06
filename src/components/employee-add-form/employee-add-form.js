import {Component} from 'react';
import './employee-add-form.css';

class EmployeeAddForm extends Component {
  state = {
    name: '',
    salary: ''
  };

  // handleValueChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   });
  // };

	handleValueChange = e => {
    const {name, value} = e.target;
    
    if (name === 'salary') {
      if (/^\d*$/.test(value)) {
        this.setState({[name]: value});
      }
    } else {
      // For all other fields, work as before
      this.setState({[name]: value});
    }
  };
	
  handleSubmit = e => {
    e.preventDefault();
    const nameValue = this.state.name.trim();
    const salaryValue = parseInt(this.state.salary, 10);

    if (nameValue.length >= 3 && !isNaN(salaryValue) && salaryValue >= 1) {
      this.props.onAdd(nameValue, salaryValue);
    } else {
      return;
    }

    this.setState({
      name: '',
      salary: ''
    });
  };

  render() {
    const {name, salary} = this.state;

    return (
      <div className="app-add-form">
        <h3>Add a new employee</h3>
        <form className="add-form d-flex" onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
            name="name"
            value={name}
            onChange={this.handleValueChange}
          />
          <input
						type="text"
						className="form-control new-post-label"
						placeholder="Salary in $?"
						name="salary"
						value={salary}
						onChange={this.handleValueChange}
						maxLength={12}
						pattern="[0-9]*"
						inputMode="numeric"
					/>

          <button type="submit" className="btn btn-outline-light">
            Add
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeeAddForm;
