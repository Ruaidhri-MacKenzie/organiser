import React, { useState } from 'react';
import './Task.css';

const Task = ({ name = "", description = "", isCompleted = false }) => {
	const [isChecked, setIsChecked] = useState(isCompleted);
	const handleChecked = e => setIsChecked(!isChecked);

	return (
		<li className="task">
			<input className="task__checkbox" type="checkbox" checked={isChecked} onChange={handleChecked} />
			<h1 className="task__name">{name}</h1>
			<p className="task__description">{description}</p>
		</li>
	);
};

export default Task;
