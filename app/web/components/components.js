import React from 'react';
import TextField from 'material-ui/TextField';

export function renderComponents(prop) {
	return (
		prop.container.components.map((comp) => 
			renderTextField(comp)
		)
	)
}

const renderTextField = (prop) => (
	<div>
		<TextField
			id={prop.id}
			name={prop.name}
      hintText={prop.hintText}
			value={prop.value}
    />
	</div>
);