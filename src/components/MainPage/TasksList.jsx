import Task from "./Task";
import { FILTER_LIST } from "../../mocks/constants";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

const TasksList = () => {
    const { allTask, unfinishTasks, filterHandle, filterPoint, filteredTasks } =
        useContext(TasksContext);

    //Вынесенные классы
    const getHiddenTasks = () => (allTask === 0 ? "hidden " : "");
    const getHiddenOneTask = (item) =>
        item.name === filterPoint ? "active" : "";

    return (
        <>
            <div className={`mp__added-task ${getHiddenTasks()}`}>
                <nav className="added-task__navigation">
                    <ul className="nav__list">
                        {FILTER_LIST.map((item, index) => (
                            <li
                                className={`nav__item ${getHiddenOneTask(item)}`}
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
                        {filteredTasks.map((todo) => (
                            <Task key={todo.id} items={todo} />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TasksList;
