const Task = () => {
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
                        <li className="task__item">
                            <input
                                type="checkbox"
                                name="myRadio"
                                value="option1"
                                id="check"
                            />
                            <label for="check">Изучаем Реакт</label>
                            <button
                                className="button__icon pencil"
                                type="button"></button>
                            <button
                                className="button__icon trash"
                                type="button"></button>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="mp__footer">© 2025</div>
        </>
    );
};

export default Task;
