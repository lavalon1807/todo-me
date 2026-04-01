import Task from "./Task";
import { FILTER_LIST } from "../../mocks/constants";
import { useContext } from "react";
import { UserContext } from "../MainPage/SetTasks";

const TasksList = ({todo}) => {
    const { allTask, unfinishTasks, filterHandle, filterPoint, filteredTasks } = useContext(UserContext);

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
                        {FILTER_LIST.map((item, index) => (
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
                        {filteredTasks.map((todo) => (
                            <Task
                                key={todo.id}
                                items={todo}
                            />
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TasksList;
