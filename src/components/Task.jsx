const Task = () => {
    return(
        <div>
            <div className="table__navigation">
                <nav className="table-menu">
                    <ul className="table-menu__list">
                        <li className="table-menu__item">Все</li>
                        <li className="table-menu__item">Активные</li>
                        <li className="table-menu__item">Завершенные</li>
                    </ul>
                </nav>
            </div>
            <div className="task">
                <label>
                <input type="checkbox" name="myRadio" value="option1" />
                    Option 1
                </label>
                <button type="button">Редактировать</button>
                <button type="button">Удалить</button>
            </div>
        </div>
    )
}

export default Task;