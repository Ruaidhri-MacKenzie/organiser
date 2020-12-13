import './App.css';
import TaskList from './components/TaskList/TaskList';

const App = () => {
	const tasks = [
		{ name: "Test", description: "testing", isCompleted: false },
		{ name: "Testing", description: "testing again", isCompleted: true },
	];
	
  return (
    <div className="App">
			Ruaidhri MacKenzie
			<TaskList tasks={tasks} />
    </div>
  );
};

export default App;
