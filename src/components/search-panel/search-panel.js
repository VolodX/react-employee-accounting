import {useState} from 'react';

import './search-panel.css';

const SearchPanel = ({onUpdateSearch}) => {
  const [term, setTerm] = useState('');

  const updateSearch = e => {
    const termValue = e.target.value;
    setTerm(termValue);
    onUpdateSearch(termValue);
  };

  return (
    <input
      type="text"
      className="form-control search-input"
      placeholder="Find an employee"
      value={term}
      onChange={updateSearch}
    />
  );
};

export default SearchPanel;
