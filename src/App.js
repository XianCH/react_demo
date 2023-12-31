import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";



function App(props) {
  const taskList = props.tasks.map((task) => (
    <Todo
    id={task.id}
    name={task.name}
    completed={task.completed}
    key={task.id}
  />
  ));

  const buttonList = props.button_tasks.map((task)=> (
    <FilterButton
    name={task.name}
    />
  ));
  
  
  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form/>
      <div className="filters btn-group stack-exception">
        {buttonList}
      </div>
      <h2 id="list-heading">3 tasks remaining</h2>
      <ul
        // role="list"
        // role="list"
        // role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading">
        {taskList}
      </ul>
    </div>
  );
}

export default App;
