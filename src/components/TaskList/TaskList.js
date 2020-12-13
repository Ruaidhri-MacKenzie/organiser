import React from 'react';
import Task from '../Task/Task';
import './TaskList.css';

const TaskList = ({ tasks }) => {
	const renderTasks = () => {
		if (tasks == null || tasks.length === 0) {
			return <p className="task-list__empty">No tasks to display.</p>
		}
		else {
			return tasks.map((task, index) => <Task key={task.name + index} name={task.name} description={task.description} isCompleted={task.isCompleted} />);
		}
	};

	return (
		<ul className="task-list">
			{renderTasks()}
		</ul>
	);
};

export default TaskList;
