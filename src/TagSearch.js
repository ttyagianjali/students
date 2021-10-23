import React from 'react';
import {Tags} from "./Tags";

export class TagSearch extends React.Component {
  state = {
    tags: [],
    filter: ""
  };

  handleChange = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { filter, tags } = this.state;
     const { tag } = this.props;

    const lowercasedFilter = filter.toString().toLowerCase();

    const filteredData = tags.filter((item) => {
       return Object.keys(item).some((key) =>
         item[key].toString().toLowerCase().includes(lowercasedFilter)
       );
     });
    
    return (
      <div>
        <input
          className="searchBar"
          type="text"
          value={filter}
          onChange={this.handleChange}
          placeholder="Search tag"
        />
        {filteredData.map((tags) => (
          <Tags tag={tag}/>
        ))}
      </div>
    );
  }
}