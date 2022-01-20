import React from "react";
import TodoList from "./todo-list.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div>
			<h2>todos</h2>
			<TodoList />
		</div>
	);
};

export default Home;
