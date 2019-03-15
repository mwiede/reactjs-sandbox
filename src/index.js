import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class ShoppingList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completed: false
    };
  }

  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        Completed: {this.state.completed}
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
        <button
          onClick={() => {
            console.log("hello");
            this.setState({ completed: "YES" });
          }}
        >
          Button
        </button>
      </div>
    );
  }
}
// a function component does NOT have state
function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map(number => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}
const numbers = [1, 2, 3, 4, 5, 6];

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <ShoppingList name="Matthias" />
        <NumberList numbers={numbers} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
