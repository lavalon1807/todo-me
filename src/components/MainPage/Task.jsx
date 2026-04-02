import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext"

const Task = ({ items }) => {
    const {removeTask, addEditText, toggleTask, handleEditText, handleEditChange} = useContext(TasksContext);

    return (
        <>
            <li className="task__item">
                {items.edit ? (
                    <form className="edit__text-form">
                        <input type="text" className="edit__text" onChange={handleEditChange} defaultValue={items.task} />
                        <button className="button button__edit" onClick={() => {addEditText(items.id)}}>Изменить</button>
                    </form>
                ) : (
                    <>
                        <input type="checkbox" className="main__text" onChange={() => toggleTask(items.id)} defaultChecked={items.flag} />
                        <span className={items.flag ? "linethrough user__text" : "user__text"}>
                            {items.task}
                        </span>
                        <button
                            className="button__icon pencil"
                            type="button"
                            onClick={() => handleEditText(items.id)}
                        >
                        </button>
                        <button
                            className="button__icon trash"
                            onClick={() => removeTask(items.id)}
                            type="button">
                        </button>
                    </>
                )}
            </li>
        </>
    );
};

export default Task;
