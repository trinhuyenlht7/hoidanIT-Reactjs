import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "Trịnh Uyên",
    age: 25,
    address: "Cần Thơ",
  };

  clickMe = () => {
    console.log(`Hello ông chủ`);
    console.log(`tui hiện ${this.state.age}`);
    console.log(`Tên tui là ${Math.floor(Math.random() * 101)}`);

    this.setState({
      name: "TU",
    });

    this.setState({
      age: Math.floor(Math.random() * 101),
    });
  };

  handleOnChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleOnSubmid = (event) => {
    event.preventDefault();
    console.log(this.state.name);
  };

  render() {
    return (
      <div>
        My name is {this.state.name}
        and I'm from {this.state.address}
        <form
          onSubmit={(event) => {
            this.handleOnSubmid(event);
          }}
        >
          <input
            input="text"
            onChange={(event) => {
              this.handleOnChange(event);
            }}
          />
          <button>Click me 2</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
