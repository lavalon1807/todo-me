const Task = () => {
    return (
        <>
            <div className="mp__added-task hidden">
                <nav className="added-task__navigation">
                    <ul className="nav__list">
                        <li className="nav__item">Все</li>
                        <li className="nav__item">Активные</li>
                        <li className="nav__item">Завершенные</li>
                    </ul>
                </nav>
                <div className="added-task__task">
                    <label>
                        <input type="checkbox" name="myRadio" value="option1" />
                        Option 1
                    </label>
                    <button type="button">Редактировать</button>
                    <button type="button">Удалить</button>
                </div>
            </div>
            <div className="mp__footer">© 2025</div>
        </>
    )
}

export default Task;