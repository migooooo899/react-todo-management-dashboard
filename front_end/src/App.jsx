import { useState } from 'react';
import './App.css';
import TaskList from './coomponents/taskList';
import TaskFiltering from './coomponents/TaskFiltering';
import TaskModal from './coomponents/TaskModal';

function App() {

  const InitialTasks = [
    {
      id: 1,
      title: "wash the dog",
      description: "",
      status: "pending"
    },

    {
      id: 2,
      title: "meet the man",
      description: "Go and meet teh man responsible for this ",
      status: "completed"
    },

    {
      id: 3,
      title: "walk the cow",
      description: "Walk the cow to the road and feed it with the most of the plant",
      status: "completed"
    },
  ]


  const [task, setTask] = useState(InitialTasks);

  //create a new state to keep track of the filtered options

  const [userfilter, setFilter] = useState("all");

  const [isModalOpen, setModalOpen] = useState(false);


  //
  function HandleDelete(id) {
    setTask(prevTask => prevTask.filter(task => (
      task.id !== id
    )))
  }

  //create a function to handle the toggle effect
  function HandleToggle(id) {
    setTask(prevTask => prevTask.map(task =>
      task.id === id
        ? {
          ...task, status: task.status === "completed" ? "pending" : "completed"
        }
        : task
    ))
  }


  const filteredTask = task.filter(item => {
    if (userfilter === "pending") {
      return item.status === "pending";
    }

    if (userfilter === "completed") {
      return item.status === "completed";
    }

    return true;
  });


  //create a function to recieve the new task object and add it to the existing array


  const getTaskObj = (newtask) => {
    setTask(prevTask => [...prevTask, newtask])
  }



  return (
    <>
      <TaskFiltering userfilter={userfilter} setfilter={setFilter} />

      <h1 className='dashboard'>Dashboard</h1>
      <p className='dashboard-subtitle'>InitialTasks</p>


      <button onClick={() => setModalOpen(true)} className='add-btn toggle-btn'>Add Task</button>


      {isModalOpen == true && (
        <TaskModal onClose={() => setModalOpen(false)}
          newtaskobj={getTaskObj}
        />
      )}


      <TaskList task={filteredTask} ondelete={HandleDelete} ontoggle={HandleToggle} />


    </>
  )
}

export default App
