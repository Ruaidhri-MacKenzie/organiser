import React, { useState } from "react";
import "./Task.css";

const Task = ({ name = "", description = "", isCompleted = false }) => {
	const [isChecked, setIsChecked] = useState(isCompleted);
	const handleChecked = (e) => setIsChecked(!isChecked);

	return (
		<li className="task">
			<input className="task__checkbox" type="checkbox" checked={isChecked} onChange={handleChecked} />
			<h2 className="task__name">{name}</h2>
			<p className="task__description">{description}</p>
			<div className="task__delete">X</div>
		</li>
	);
};

export default Task;
