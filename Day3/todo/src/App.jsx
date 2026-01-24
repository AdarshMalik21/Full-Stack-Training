import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!task || !date) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      date: date,
      status: "pending",
    };

    setTodos([...todos, newTodo]);
    setTask("");
    setDate("");
  }

  const pendingTodos = todos.filter(todo => todo.status === "pending");
  const completedTodos = todos.filter(todo => todo.status === "completed");

  function markAsDone(id) {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, status: "completed" }
          : todo
      )
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-3 gap-6">

        
        <div className="bg-green-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2 text-green-700">
            Completed
          </h2>

          {completedTodos.map(task => (
            <div
              key={task.id}
              className="bg-white p-2 rounded mb-2 text-sm"
            >
              {task.text} <br />
              <span className="text-gray-500">{task.date}</span>
            </div>
          ))}
        </div>

        
        <div className="bg-yellow-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2 text-yellow-700">
            Pending
          </h2>

          {pendingTodos.map(task => (
            <div
              key={task.id}
              className="bg-white p-2 rounded mb-2 flex justify-between items-center text-sm"
            >
              <div>
                <p>{task.text}</p>
                <span className="text-gray-500">{task.date}</span>
              </div>

              <button
                onClick={() => markAsDone(task.id)}
                className="bg-green-500 text-white px-3 py-1 rounded text-xs"
              >
                Done
              </button>
            </div>
          ))}
        </div>

        
        <div className="bg-blue-100 p-4 rounded shadow">
          <h2 className="text-xl font-bold mb-2 text-blue-700">
            Add Task
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="text"
              placeholder="Task name"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="p-2 border rounded"
            />

            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="p-2 border rounded"
            />

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded mt-2"
            >
              Add Task
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}

export default App;
