import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
       <div className="header">
      <a href="https://gangforcode.com/" target="_blank" rel="noreferrer noopener" class="button-style">
          Back to Tutorial
        </a>
      </div>
    <h1>My ToDo Application</h1>
    <TodoList/>
    </div>
  );
}

export default App;
