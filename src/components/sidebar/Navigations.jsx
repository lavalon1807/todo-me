const Navigations = () => {
    return(
        <div>
            <button className="button-task">
                <img className="icon" src="#" alt="Иконка" />
                <p className="text">Мои Задачи</p>
            </button>
            <button className="button-menu">
                <img className="icon" src="#" alt="Иконка" />
                <p className="text">Настройка</p>
            </button>
            <nav className="menu">
                <ul className="menu__list">
                    <li className="menu__item">Все</li>
                    <li className="menu__item">Активные</li>
                    <li className="menu__item">Завершенные</li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigations;