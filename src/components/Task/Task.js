import React, { useState } from 'react';
import './Task.css';

const Task = ({ name, description, isCompleted }) => {
	const [isChecked, setIsChecked] = useState(isCompleted);
	const toggleIsChecked = () => setIsChecked(!isChecked);

	return (
		<li className="task">
			<input className="task__checkbox" type="checkbox" checked={isChecked} onClick={toggleIsChecked} />
			<h1 className="task__name">{name}</h1>
			<p className="task__description">{description}</p>
		</li>
	);
};

export default Task;
