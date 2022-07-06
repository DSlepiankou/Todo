import React from "react";
import './item-status-filter.css';

const ItemStatusFilter = () => {
    return (
      <span className="item-status-filter">
        <button className="btn btn-outline-info item-status-filter" type="button">All</button>
        <button className="btn btn-outline-info item-status-filter" type="button">Active</button>
        <button className="btn btn-outline-info item-status-filter" type="button">Done</button>
      </span>  
    );
}

export default ItemStatusFilter;