import cn from 'classnames';
import { NumericFormat } from 'react-number-format';
import './employee-list-item.css';

const EmployeeListItem = ({ name, salary, onDelete, onToggleProp, onUpdateSalary, increase, rise }) => {
  const classes = cn('list-group-item', 'd-flex', 'justify-content-between', {
    increase,
    rise
  });

  const handleValueChange = values => {
    const newSalary = values.value;
    onUpdateSalary(newSalary);
  };

	const isAllowed = values => {
		const maxSalary = 999999999;
		const {floatValue} = values;
		return floatValue <= maxSalary || !floatValue;
	}

  return (
    <li className={classes}>
      <span
        className="list-group-item-label"
        onClick={onToggleProp}
        data-toggle="rise"
      >
        {name}
      </span>
      <NumericFormat
        className="list-group-item-input"
        value={salary}
        suffix="$"
        thousandSeparator={true}
        allowNegative={false}
        onValueChange={handleValueChange}
        placeholder="Salary"
        aria-label={`Salary for ${name}`}
				isAllowed={isAllowed}
				decimalScale={0} // Prohibit fractional part
				// fixedDecimalScale={true}
				// defaultValue={0}
      />
      <div className="d-flex justify-content-center align-items-center">
        <button
          type="button"
          className="btn-cookie btn-sm"
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