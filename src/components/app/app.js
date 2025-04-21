import {Component} from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {name: 'John C.', salary: 1400, increase: false, rise: true, id: 1},
        {name: 'Alex M.', salary: 4600, increase: true, rise: false, id: 2},
        {name: 'Carl W.', salary: 9500, increase: false, rise: false, id: 3},
        {name: 'Mark.F', salary: 17000, increase: false, rise: false, id: 4}
      ]
    };
    this.maxId = 5;
  }

  deleteItem = id => {
    this.setState(({data}) => {
      return {
        data: data.filter(item => item.id !== id)
      };
    });
  };

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    };
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    });
  };

  onToggleIncrease = id => {
    console.log(`Increase this ${id}`);
  };

  onToggleRise = id => {
    console.log(`Rise this ${id}`);
  };

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeeList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
					onToggleRise={this.onToggleIncrease}
        />
        <EmployeeAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
