import React from "react";
import "./App.css";
import {Collapsible} from "./Collapsible"
import Card from "react-bootstrap/Card";
import { ListGroupItem } from "react-bootstrap";

class App extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
      filter: "",
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

  handleChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { isLoaded, items, filter } = this.state;

    const lowercasedFilter = filter.toString().toLowerCase();
    const filteredData = items.filter((item) => {
      return Object.keys(item).some((key) =>
        item[key].toString().toLowerCase().includes(lowercasedFilter)
      );
    });

    if (!isLoaded)
      return (
        <div>
          <h1> Please wait some time.... </h1>{" "}
        </div>
      );

    return (
      <div className="App">
        <Card className="students" style={{ width: "50rem" }}>
          <input
            className="searchBar"
            type="text"
            value={filter}
            onChange={this.handleChange}
            placeholder="Search by name"
          />
          {filteredData.map((item) => (
            <ListGroupItem>
              <ol className="ol" key={item.id}>
                <Card.Img className="img" src={item.pic} />
                <Card.Text className="data text-muted">
                  <Card.Title className="text-dark">
                    {item.firstName} {item.lastName}
                  </Card.Title>
                  Email: {item.email} <br></br>
                  Company: {item.company} <br></br>
                  Skills: {item.skill} <br></br>
                  Average:{" "}
                  {item.grades.reduce((a, b) => a + parseInt(b), 0) /
                    item.grades.length}
                </Card.Text>
                <Collapsible title="+">
                  <li>
                    <ul>{item.grades}</ul>
                  </li>
                </Collapsible>
              </ol>
            </ListGroupItem>
          ))}
        </Card>
      </div>
    );
  }
}

export default App;
