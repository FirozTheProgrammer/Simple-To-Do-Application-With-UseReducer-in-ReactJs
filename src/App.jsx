import TodoForm from "./Components/Todo/TodoForm";
import Todolist from "./Components/Todo/Todolist";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div>
        <TodoForm />
        <Todolist></Todolist>
      </div>
    </TodoProvider>
  );
}

export default App;
