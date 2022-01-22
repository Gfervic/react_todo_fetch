import React, { useState } from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import Task from "./task.jsx";

const TodoList = (props) => {
	// Hooks
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");
	// Logic

	const addTask = () => {
		if (task.length === 0) {
			return;
		} else {
			const newTasks = tasks.concat({
				title: task,
				id: tasks.length + 1,
			});
			setTasks(newTasks);
		}
		// alert(`Task ${task} has been added to the tasks arr`);
	};

	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		setTasks(newTasks);
	};

	// adding a task into the tasks array on keypress enter
	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			if (task.length === 0) {
				return;
			} else {
				addTask();
			}
		}
	};

	// JSX∫
	return (
		<div className="todo-list">
			{/* <p>Your task is: {task ? task : "Not defined"}</p> */}

			{/* <Card style={{ width: "18rem" }}> */}
			<label className="header" htmlFor="new-todo">
				What do I need to before leisure time
			</label>
			<br></br>
			<input
				id="new-todo"
				type="text"
				onChange={(e) => setTask(e.target.value)}
				onKeyPress={handleKeyPress}
				value={task}
				placeholder="Please type your task here"
				// required so we can't add empty task
				required
			/>
			<button className="add" onClick={() => addTask()}>
				Add 🟢
			</button>

			<ul>
				{tasks.map((task) => {
					return (
						<li key={task.id}>
							{task.title}
							<button
								className="delete"
								onClick={() => deleteTask(task.id)}>
								Delete 🔴
							</button>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default TodoList;

// {/* <ListGroup variant="flush">
// 		{tasks.map((task) => {
// 			return (
// 				<>
// 					<Task title={task.title} key={task.id} />
// 					<button
// 						className="delete"
// 						onClick={() => deleteTask(task.id)}>
// 						❌
// 					</button>
// 				</>
// 			);
// 		})}
// 	</ListGroup> */}
// {/* </Card> */}
