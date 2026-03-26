import Task from "./Task";

const TasksList = ({todoSetTask, removeTask, editTask}) => {

    return (
        <>
            <div className="mp__added-task">
                <nav className="added-task__navigation">
                    <ul className="nav__list">
                        <li className="nav__item active">Все |</li>
                        <li className="nav__item">Активные |</li>
                        <li className="nav__item">Завершенные</li>
                    </ul>
                    <div className="added-task__todo">
                        2&nbsp;задачи осталось
                    </div>
                </nav>
                <div className="added-task__task">
                    <ul className="task__list">
                        {todoSetTask.map((todoSetTask) => (
                            <Task key={todoSetTask.id} items={todoSetTask} removeTask={removeTask} editTask={editTask} />
                        ))}
                    </ul>
                </div>
            </div>
            <div className="mp__footer">© 2025</div>
        </>
    );
};

export default TasksList;
