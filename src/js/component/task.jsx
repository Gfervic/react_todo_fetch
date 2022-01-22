import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import ListGroup from "react-bootstrap/ListGroup";

// Solve the key thing on a mentorship

const Task = (props) => {
	// HOOKS
	// LOGIC

	// JSX
	return (
		<>
			<ListGroup.Item key={props.id}>{props.title}</ListGroup.Item>
		</>
	);
};

export default Task;
