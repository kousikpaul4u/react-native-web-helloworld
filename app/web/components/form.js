import React, { Component } from "react";
import { render } from "react-dom";

import Form from "react-jsonschema-form";

const schema = {
  title: "Case Form",
  type: "object",
  properties: {
    firstName: {
      type: "string",
      title: "Received Date",
    },
    lastName: {
      type: "string",
      title: "Loan Number",
      minLength: 5
    },
    age: {
      type: "integer",
      title: "Brand Name"
    },
    bio: {
      type: "string",
      title: "Due Date"
    },
    password: {
      type: "string",
      title: "FL/UDAAP",
      minLength: 3
    },
    telephone: {
      type: "string",
      title: "Error Type",
      minLength: 10
    }
  }
};

const log = (type) => console.log.bind(console, type);

export default class RegForm extends Component {
	render() {
		return (
      <div style={{ width: '50%', paddingLeft: '20%' }} >
        <Form schema={schema}
          onChange={log("changed")}
          onSubmit={log("submitted")}
          onError={log("errors")} />
      </div>
		)
	}
}
