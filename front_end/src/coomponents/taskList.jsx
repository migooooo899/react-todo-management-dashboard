const TaskList = ({ task, ondelete, ontoggle }) => {

    /**
     * 
     * implement the delete button 
     * 
     * add a del btn 
     * 
     * pass the data from the parent to the child 
     * 
     * 
     */

    /*
    add a btn to each task to toggle the status
    
    
    
    
    
    
    */




    const individualTask = task.map(task => (
        <li key={task.id}
            className="task-list" >
            <p> {`title: ${task.title}`}</p>
            <h2> {`description : ${task.description}`}</h2>
            <p>
                {`status: ${task.status}`}
            </p>



            <button className="delete-btn " onClick={() => {
                ondelete(task.id)
            }}>
                DeleteTask
            </button>



            <button className="toggle-btn" onClick={() => {
                ontoggle(task.id)
            }}>

                Toggle Status
            </button>
        </li>
    ));

    return (
        <div>
            <ul>{individualTask}</ul>
        </div>
    )
}

export default TaskList