import React, { useState } from "react";
import './search-panel.css';

function SearchPanel(props) {

  const [state, setState] = useState('')

  function onSearchChange(event) {
    const term = event.target.value;
    setState(term);
    props.onSearchChange(term);
  }


  return (
    <input
      className="form-control search-input"
      placeholder="Type to search"
      value={state}
      onChange={onSearchChange}
    />
  )
}

export default SearchPanel;
