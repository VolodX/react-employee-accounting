import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

function App() {

	const data = [
		{name: 'John C.', salary: 1200, increase: false},
		{name: 'Alex M.', salary: 4500, increase: true},
		{name: 'Carl W..', salary: 9000, increase: false},
	]

  return (
    <div className="app">
      <AppInfo />

      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>

      <EmployeeList data={data}/>
			<EmployeeAddForm />
    </div>
  );
}

export default App;
