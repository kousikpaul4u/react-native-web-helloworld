import React, { Component, PropTypes } from 'react';

import TextField from 'material-ui/TextField';
import * as Components from './components';

export const jsonObj = [
	{
		"container": {
			"name": "form",
			"components": [
				{
					"type": "TextField",
					"name": "firstName",
					"id": "firstName",
					"hintText": "First Name",
					"value": ""
				},
				{
					"type": "TextField",
					"name": "lastName",
					"id": "lastName",
					"hintText": "Last Name",
					"value": ""
				}
			]
		}
	}
];


export class RenderComponents extends Component {
	render() {
		return (
			<div>
				{Components.renderComponents(jsonObj)}
			</div>
		);
	}

}

export default RenderComponents;
