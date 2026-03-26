const Task = ({ items, removeTask, editTask }) => {
    return (
        <>
            <li className="task__item">
                <input type="checkbox" onClick={() => editTask(items.id)} />
                <span className={items.flag ? "linethrough" : ""}>
                    {items.task}
                </span>
                <button className="button__icon pencil" type="button"></button>
                <button
                    className="button__icon trash"
                    onClick={() => removeTask(items.id)}
                    type="button"></button>
            </li>
        </>
    );
};

export default Task;
