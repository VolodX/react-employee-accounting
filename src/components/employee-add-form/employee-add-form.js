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

  onSubmit = e => {
    e.preventDefault();
		const salaryValue = parseInt(this.state.salary);
		const nameValue = this.state.name;

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
        <form className="add-form d-flex" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control new-post-label"
            placeholder="What's his name?"
            name="name"
            value={name}
            onChange={this.onValueChange}
          />
          <input
            type="number"
            className="form-control new-post-label"
            placeholder="Salary in $?"
            name="salary"
            value={salary}
            onChange={this.onValueChange}
          />

          <button type="submit" className="btn btn-outline-light">
            Добавить
          </button>
        </form>
      </div>
    );
  }
}

export default EmployeeAddForm;
