import { createPortal } from 'react-dom';

import { useState } from 'react';


import '../coomponents/modal.css';




const TaskModal = ({ onClose, newtaskobj }) => {


    //keep track of the three options using state

    const [title, setTitle] = useState("");

    const [description, setDescription] = useState("");

    const [status, setStatus] = useState("pending");


    const HandleSubmit = (e) => {
        //prevent the default behavioour of the browser

        e.preventDefault()

        //create a new task obj from state
        const createNewTask = {
            id: Date.now(),
            title,
            description,
            status
        }
        //send the task obj back to app.jsx
        newtaskobj(createNewTask)

        //close the modal
        onClose();
    }


    return createPortal(
        <div className="modal-overlay">
            <div className="modal-content">

                <h2>Create New Task</h2>

                <form className="task-form"
                    onSubmit={HandleSubmit}

                >

                    <div className="form-group">
                        <label htmlFor="title">Task Title *</label>
                        <input
                            type="text"
                            id="title"
                            placeholder="What needs to be done?"

                            value={title}

                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea
                            id="description"
                            placeholder="Add more details about this task..."
                            rows="4"

                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="status">Task Status</label>
                        <select
                            id="status"
                            value={status}
                            onChange={(e) => setStatus(e.target.value)}
                        >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>

                    <div className="form-actions">
                        <button type="button" className="modal-close" onClick={onClose}>
                            Cancel
                        </button>

                        <button type="submit" className="submit-btn"
                            onSubmit={newtaskobj}
                        >
                            Create Task
                        </button>
                    </div>

                </form>

            </div>
        </div>,
        document.getElementById('modal-root')
    );
};

export default TaskModal;