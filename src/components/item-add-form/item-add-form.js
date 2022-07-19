import React, { useState } from "react";
import './item-add-form.css';

function ItemAddForm(props) {

    const [state, setState] = useState({label:''})

    function onLabelChange(event) {
        setState({
            label: event.target.value
        })
    }

    function onSubmit(e) {
        e.preventDefault();
        props.onItemAdded(state.label)
        setState({
            label: ''
        })
    }

    return (
        <form className="item-add-form d-flex"
            onSubmit={onSubmit}>
            <input type="text"
                className="form-control"
                onChange={onLabelChange}
                placeholder="What needt to be done"
                value={state.label}>
            </input>
            <button
                className="btn btn-outline-secondary">
                Add Item
            </button>
        </form>
    )
}

export default ItemAddForm;