import Task from "./Task";

const TasksList = ({
    todoSetTask,
    removeTask,
    toggleTask,
    handleEditText,
    handleChange,
    addTask,
    addEditText,
    allTask,
    handleEditChange,
    textDefaultUser,
    unfinishTasks,
    chooseTask,
    filterList,
    filterHandle,
    filterPoint,
}) => {
    return (
        <>
            <div
                className={
                    allTask === null || allTask === 0
                        ? "hidden mp__added-task"
                        : "mp__added-task"
                }>
                <nav className="added-task__navigation">
                    <ul className="nav__list">
                        {filterList.map((item, index) => (
                            <li
                                className={
                                    item.name === filterPoint
                                        ? "nav__item active"
                                        : "nav__item"
                                }
                                onClick={() => filterHandle(item.name)}
                                key={index}>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                    <div className="added-task__todo">
                        Невыполненные задачи:&nbsp;{unfinishTasks}
                    </div>
                </nav>
                <div className="added-task__task">
                    <ul className="task__list">
                        {todoSetTask.map((todoSetTask) => (
                            <Task
                                key={todoSetTask.id}
                                items={todoSetTask}
                                removeTask={removeTask}
                                toggleTask={toggleTask}
                                handleEditText={handleEditText}
                                handleChange={handleChange}
                                addTask={addTask}
                                addEditText={addEditText}
                                handleEditChange={handleEditChange}
                                textDefaultUser={textDefaultUser}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TasksList;
