import cn from 'classnames';

import './employee-list-item.css';

const EmployeeListItem = props => {
  const {
    name,
    salary,
    onDelete,
    onToggleProp,
    increase,
    rise
  } = props;
  const classes = cn('list-group-item', 'd-flex', 'justify-content-between', {
    increase,
    rise
  });

  return (
    <li className={classes}>
      <span className="list-group-item-label" onClick={onToggleProp} data-toggle="rise">
        {name}
      </span>
      <input
        type="text"
        className="list-group-item-input"
        defaultValue={salary + '$'}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm "
          onClick={onToggleProp}
					data-toggle="increase"
        >
          <i className="fas fa-cookie"></i>
        </button>

        <button type="button" className="btn-trash btn-sm" onClick={onDelete}>
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeeListItem;
