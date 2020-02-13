import React from 'react';
import './Todo.css';

const TodoForm = props => {
    return(
        <form onSubmit={props.addItem}>
            <input type="text" 
            name="itemText" 
            value={props.name} 
            onChange={props.onChangeEvent}/>

            <button className="addBtn" type="submit">Add Item</button>
            <button className="delBtn" onClick={props.deleteItem}>Delete Item</button>

        </form>
    );
};

export default TodoForm;