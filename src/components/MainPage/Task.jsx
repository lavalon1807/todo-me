const Task = (props) => {
    const {name} = props;
    return (
        <>
            <li className="task__item">
                <input
                    type="checkbox"
                    name="myRadio"
                    value="option1"
                    id="check"
                />
                <label for="check">{name}</label>
                <button
                    className="button__icon pencil"
                    type="button"></button>
                <button
                    className="button__icon trash"
                    type="button"></button>
            </li>
        </>
    )
}

export default Task;