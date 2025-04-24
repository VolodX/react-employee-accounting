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
        {name: 'John C.', salary: 990, increase: false, rise: true, id: 1},
        {name: 'Alex M.', salary: 4600, increase: true, rise: false, id: 2},
        {name: 'Carl W.', salary: 9500, increase: false, rise: false, id: 3},
        {name: 'Mark.F', salary: 17000, increase: false, rise: false, id: 4}
      ],
			term : '',
			filter: 'all'
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
      rise: false,
      id: this.maxId++
    };
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      };
    });
  };

  onToggleProp = (id, prop) => {
    this.setState(({data}) => ({
      data: data.map(item => {
        if (item.id === id) {
          return {...item, [prop]: !item[prop]}; // Return old object with new property
        }
        return item;
      })
    }));
  };

	searchEmp = (items, term) => {
		if (term.length === 0) {
			return items;
		}

		return items.filter(item => {
			// return item.name.indexOf(term) > -1
			return item.name.toLowerCase().includes(term.toLowerCase())
		})
	}

	onUpdateSearch = (term) => {
		this.setState({term: term})
	}

	filterPost = (items, filter) => {
		switch (filter) {
			case 'rise':
				return items.filter(item => item.rise);
			case 'over1000':
				return items.filter(item => item.salary > 1000);
			default: 
				return items;
		}
	}

	onFilterSelect = (filter) => {
		this.setState({filter})
	}

  render() {
		const {data, term, filter} = this.state;
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
		const visibleData = this.filterPost(this.searchEmp(data, term), filter);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />

        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>

        <EmployeeList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeeAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
