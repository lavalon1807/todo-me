import { useContext, useState } from "react";
import { TasksContext } from "../../context/TasksContext";

const Task = ({ items }) => {
    const {
        removeTask,
        addEditText,
        toggleTask,
        handleEditChange,
    } = useContext(TasksContext);

    const [isEditing, setIsEditing] = useState(false);

    const handleSaveEdit = () => {
        addEditText(items.id);
        setIsEditing(false);
    };

    return (
        <>
            <li className="task__item">
                { isEditing ? (
                    <form className="edit__text-form">
                        <input
                            type="text"
                            className="edit__text"
                            onChange={handleEditChange}
                            defaultValue={items.text}
                        />
                        <button
                            type="button"
                            className="button button__edit"
                            onClick={handleSaveEdit}>
                            Изменить
                        </button>
                        <button
                            type="button"
                            className="button button__close"
                            onClick={()=>setIsEditing(false)}>
                            Отменить
                        </button>
                    </form>
                ) : (
                    <>
                        <input
                            type="checkbox"
                            className="main__text"
                            onChange={() => toggleTask(items.id)}
                            defaultChecked={items.done}
                        />
                        <span
                            className={
                                items.done
                                    ? "linethrough user__text"
                                    : "user__text"
                            }>
                            {items.text}
                        </span>
                        <button
                            className="button__icon pencil"
                            type="button"
                            onClick={()=>setIsEditing(true)}></button>
                        <button
                            className="button__icon trash"
                            onClick={() => removeTask(items.id)}
                            type="button"></button>
                    </>
                )}
            </li>
        </>
    );
};

export default Task;
