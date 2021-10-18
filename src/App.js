import React from "react";
import "./App.css";
class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
    fetch("https://api.hatchways.io/assessment/students")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          items: res.students,
          isLoaded: true,
        });
      });
  }
  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        {items.map((item) => (
          <ol key={item.id}>
            <img className="img" src={item.pic}></img> <br></br>
            <div>
              <div>
                {item.firstName} {item.lastName}
              </div>  
              Email: {item.email} <br></br>
              Company: {item.company} <br></br>
              Skills: {item.skill}
              <br></br>
              Average:{" "}
              {item.grades.reduce((a, b) => a + parseInt(b), 0) /
                item.grades.length}
            </div>
            
          </ol>
          
        ))}
      </div>
    );
  }
}

export default App;
