import React from "react";
import "./App.css";
import {Collapsible} from "./Collapsible"
import Card from "react-bootstrap/Card";
<<<<<<< HEAD
// import { Tags } from "./Tags";
=======
>>>>>>> parent of 3f89aab... Revert "Revert "recent commit""
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
<<<<<<< HEAD
    
    // const selectedTags = (tags) => {
    //   console.log(tags);
    // };
=======
>>>>>>> parent of 3f89aab... Revert "Revert "recent commit""

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
            <ListGroupItem className="studentList">
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
<<<<<<< HEAD
                    item.grades.length}{" "}
                  %<br></br>
                  <Collapsible>
                    <div className="grades">
                      {item.grades.map((grade, i) => {
                        if (i >= this.state.min && i <= this.state.max) {
                          return (
                            <ul className="gradesList">
                              test {i}: {grade} %
                            </ul>
                          );
                        }
                      })}
                    </div>
                  </Collapsible>
                  {/* <Tags selectedTags={selectedTags} tags={[]} /> */}
=======
                    item.grades.length}
>>>>>>> parent of 3f89aab... Revert "Revert "recent commit""
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
