import TodoForm from "./Components/Todo/TodoForm";
import TodoProvider from "./context/TodoProvider";

function App() {
  return (
    <TodoProvider>
      <div>
     <TodoForm/>
      </div>
    </TodoProvider>
  );
}

export default App;
