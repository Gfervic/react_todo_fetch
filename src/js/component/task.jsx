import React from "react";
import ListGroup from "react-bootstrap/ListGroup";

const Task = (props) => {
	// HOOKS
	// LOGIC

	// JSX
	return (
		<>
			<ListGroup.Item>{props.title}</ListGroup.Item>
		</>
	);
};

export default Task;
