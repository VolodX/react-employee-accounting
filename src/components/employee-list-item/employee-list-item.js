import {Component} from 'react';
import cn from 'classnames';

import './employee-list-item.css';

class EmployeeListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increase: false,
      rise: false
    };
  }

  onIncrease = () => {
    this.setState(({increase}) => ({
      increase: !increase
    }));
  };

  onRise = () => {
    this.setState(({rise}) => ({
      rise: !rise
    }));
  };

  render() {
    const {name, salary, onDelete} = this.props;
    const {increase, rise} = this.state;
    const classes = cn('list-group-item', 'd-flex', 'justify-content-between', {
      increase,
      rise
    });

    return (
      <li className={classes}>
        <span className="list-group-item-label" onClick={this.onRise}>
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
            onClick={this.onIncrease}
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
  }
}

export default EmployeeListItem;
