const TaskFiltering = ({ setfilter }) => {
    return (
        <div>
            <h1>Filter by:</h1>
            <button onClick={() => setfilter("all")}>
                All
            </button>
            <button onClick={() => setfilter("pending")}>
                Pending
            </button>
            <button onClick={() => setfilter("completed")}>
                Completed
            </button>
        </div>
    )
}

export default TaskFiltering