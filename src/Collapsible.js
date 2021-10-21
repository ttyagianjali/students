import React from "react";

export class Collapsible extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open });
  }

  componentDidUpdate() {}

  render() {
    return (
      <div>
        <button
          type="submit"
          onClick={(e) => this.togglePanel(e)}
          className="collapsible"
        >
          <span></span>
          <span></span>
        </button>
        {this.state.open ? (
          <div className="content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}
