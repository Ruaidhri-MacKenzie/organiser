import React, { useState, useEffect } from "react";
import Task from "../Task/Task";
import "./TaskList.css";

const TaskList = () => {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		// Fetch from API with HTTP GET request
		const tasks = [
			{ name: "Test", description: "testing", isCompleted: false },
			{ name: "Testing", description: "testing again", isCompleted: true },
		];

		setTasks(tasks);
	}, []);

	const renderTasks = () => {
		if (tasks == null || tasks.length === 0) {
			return <p className="task-list__empty">No tasks to display.</p>;
		} else {
			return tasks.map((task, index) => <Task key={task.name + index} name={task.name} description={task.description} isCompleted={task.isCompleted} />);
		}
	};

	return (
		<ul className="task-list">
			<li className="task-list__add">Add Task</li>
			{renderTasks()}
		</ul>
	);
};

export default TaskList;
