import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeeList from '../employee-list/employee-list';
import EmployeeAddForm from '../employee-add-form/employee-add-form';

import './app.css';

function App() {

	const data = [
		{name: 'John C.', salary: 1400, increase: false, id: 1},
		{name: 'Alex M.', salary: 4600, increase: true, id: 2},
		{name: 'Carl W.', salary: 9500, increase: false, id: 3},
		{name: 'Mark.F', salary: 9900, increase: false, id: 4},
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
