const Task = ({ items, removeTask, toggleTask, handleEditText, handleChange, addTask, addEditText, handleEditChange, textDefaultUser }) => {

    return (
        <>
            <li className="task__item">
                {items.edit ? (
                    <>
                        <input type="text" className="edit__text" onChange={handleEditChange} defaultValue={items.task} />
                        <button className="button button__edit" onClick={() => {addEditText(items.id)}}>Изменить</button>
                    </>
                ) : (
                    <>
                        <input type="checkbox" className="main__text" onClick={() => toggleTask(items.id)} />
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
