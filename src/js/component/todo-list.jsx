import React, { useState, useEffect } from "react";
// import Card from "react-bootstrap/Card";
// import ListGroup from "react-bootstrap/ListGroup";
// import Task from "./task.jsx";

const TodoList = (props) => {
	// Hooks
	const [tasks, setTasks] = useState([]);
	const [task, setTask] = useState("");

	useEffect(() => {
		getTask();
	}, []);

	// I dont want the useeffect to launch when we change the state
	// the Usestate inside the [] to launch the effect
	// Logic
	// Only for method GET it's not needed to declare methods
	const getTask = () => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/goni")
			// [{}] that I needed to use it
			.then((response) => response.json())
			.then((data) => setTasks(data));
	};

	const synchronizeTasks = (newTasks) => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/goni", {
			method: "PUT",
			body: JSON.stringify(newTasks),
			headers: {
				"Content-Type": "application/json",
			},
		}).then((response) => {
			// *** This step is important. I don't show it to the use unless the api response is okay ***
			if (response.ok) getTask();
		});
	};

	// const createUser = () => {
	// 	fetch("https://assets.breatheco.de/apis/fake/todos/user/goni", {
	// 		method: "POST",
	// 		body: JSON.stringify([]),
	// 		headers: {
	// 			"Content-Type": "application/json",
	// 		},
	// 	});
	// };

	// const updateTasks = () => {};

	// let arrOfObj = [];

	// for (let i = 0; i < tasks.length; i++) {
	// 	arrOfObj[i] = {
	// 		label: tasks[i],
	// 		done: false,
	// 	};
	// }

	// console.log(arrOfObj);

	// fetch("https://assets.breatheco.de/apis/fake/todos/user/goni").then(
	// 	(response) => {
	// 		if (!response.ok) {
	// 			createUser();
	// 		}
	// 	}
	// );

	const addTask = () => {
		if (task.length === 0) {
			return;
		} else {
			const newTasks = tasks.concat({
				label: task,
				id: new Date(),
				done: false,
			});
			synchronizeTasks(newTasks);
		}
		// alert(`Task ${task} has been added to the tasks arr`);
	};

	const deleteTask = (id) => {
		const newTasks = tasks.filter((task) => task.id !== id);
		synchronizeTasks(newTasks);
	};

	const deleteTasks = () => {
		synchronizeTasks([{ label: "buy groceries", done: true }]);
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
				Add ✅
			</button>

			<ul>
				{tasks.map((task) => {
					if (task.id != null) {
						return (
							<li key={task.id}>
								{task.label}
								<button
									className="delete"
									onClick={() => deleteTask(task.id)}>
									Delete ❌
								</button>
							</li>
						);
					}
				})}
			</ul>
			<button className="deleteAll" onClick={() => deleteTasks()}>
				Delete All ❌
			</button>
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
