import './app-filter.css';

const AppFilter = props => {
  const buttonsData = [
    {name: 'all', label: 'All employees'},
    {name: 'rise', label: 'For a salary increase'},
    {name: 'over1000', label: 'Salary over $1000'}
  ];

  const buttons = buttonsData.map(({name, label}) => {
    const active = props.filter === name;
    const clazz = active ? 'btn-light' : 'btn-outline-light';

    return (
      <button
        className={`btn ${clazz}`}
        type="button"
        key={name}
        onClick={() => props.onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });

  return (
    <div className="btn-group d-flex">
      {buttons}
      <button
        type="button"
        className="btn btn-outline-light ms-auto"
        onClick={props.onRestoreEmployees}
      >
        Restore employees
      </button>
    </div>
  );
};

export default AppFilter;
