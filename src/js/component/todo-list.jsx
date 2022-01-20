import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Task from "./task.jsx";

const TodoList = (props) => {
	// Hooks

	// Logic
	const [tasks, setTasks] = useState([]);
	const [task, setTaksValue] = useState("");

	// let tasks = ["task1", "taks2", "taks3"];

	// adding a task into the tasks array on keypress enter
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			if (task.length === 0) {
				return;
			}
			setTasks(tasks.concat(task));
			// alert(`Task ${task} has been added to the tasks arr`);
			console.log(tasks);
		}
	};

	// JSX∫
	return (
		<>
			<p>Your task is: {task ? task : "Not defined"}</p>
			<label htmlFor="new-todo">What needs to be done?</label>
			<Card style={{ width: "18rem" }}>
				<input
					id="new-todo"
					type="text"
					onChange={(e) => setTaksValue(e.target.value)}
					onKeyPress={handleKeyPress}
					value={task}
					placeholder="Please type your task here"
				/>
				<ListGroup variant="flush">
					{tasks.map((task) => {
						<Task title={task} />;
					})}
				</ListGroup>
			</Card>
		</>
	);
};

export default TodoList;

// // iteration2
// // delete one task > we don't see that anymore
