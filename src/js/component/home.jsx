import React from "react";
import TodoList from "./todo-list.jsx";

//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="text-center mt-5">
			<h2 className="todos">todos</h2>
			<TodoList />
		</div>
	);
};

export default Home;
