import React from 'react';
import TodoForm from "./components/TodoComponents/TodoForm";
import TodoList from "./components/TodoComponents/TodoList";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      name: "",
      itemArray: []
    };
  };

  toggleItem = () => {
    this.setState({
      complete: !this.state.complete
    });
  };

  onChangeEvent = event => {
    console.log(event.target.value);
    this.setState({ ...this.state, name: event.target.value });
  };
  
  toggleItem = itemId => {
    this.setState({
      ...this.state.name,
      itemArray: this.state.itemArray.map(item => {
        if (itemId === item.id) {
          return{
            ...item,
            complete: !item.complete
          }
        }
        return item;
      })
    })
  };

  addItem = event => {
    event.preventDefault();
    const newItem = {
      name: this.state.name,
      completed: false,
      id: Date.now()
    };

    this.setState(prevState => ({
      itemArray: [...prevState.itemArray, newItem]
    }));

  };

  deleteItem = () => {
    console.log("deleted");
    this.setState({
      ...this.state.name,
      itemArray: this.state.itemArray.filter(item => item.complete === false)
    });
  };
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
        name={this.state.name}
        onChangeEvent={this.onChangeEvent}
        addItem={this.addItem}
        deleteItem={this.deleteItem}
        />

        <TodoList 
        itemArray={this.state.itemArray}
        toggleItem={this.toggleItem}
        />
      </div>
    );
  }
}

export default App;
