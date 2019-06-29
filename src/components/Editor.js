import React, { Component } from "react";
import brace from "brace";
import AceEditor from "react-ace";
import api from "../api";
import { parse } from "query-string";
import "brace/mode/xml";
import "brace/theme/github";

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = { data: "", error: false };
  }

  handleError(error) {
    this.setState({ error });
  }

  componentDidMount() {
    const { id } = parse(window.location.search);
    api.get
      .clip(id)
      .then(({ data }) => this.setState({ data }))
      .catch(({ message }) => this.handleError(message));
  }

  render() {
    const { data, error } = this.state;
    return error ? (
      <div>
        <p>{error}</p>
      </div>
    ) : (
      <AceEditor
        mode="xml"
        theme="github"
        value={data}
        width="100%"
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}

export default Editor;
