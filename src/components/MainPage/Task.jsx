const Task = ({ items, removeTask, editTask }) => {

    return (
        <>
            <li className="task__item">
                <label htmlFor="check" className={items.flag ? 'linethrough' : ''}>
                    <input onClick={() => editTask(items.id)}
                        type="checkbox"
                        id="check"
                    />{items.task}
                </label>
                <button className="button__icon pencil" type="button"></button>
                <button className="button__icon trash" onClick={() => removeTask(items.id)} type="button"></button>
            </li>
        </>
    );
};

export default Task;
