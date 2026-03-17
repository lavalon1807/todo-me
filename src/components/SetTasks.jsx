const SetTasks = () => {
    return(
        <div>
            <header className="header">My Tasks</header>
            <input type="text" placeholder="Напишите свою задачу..."/>
            <button className="button-add">Добавить</button>
            <div className="main__page">
                <img className="main__picture" src="#" alt="Картинка" />
                <div className="main__text">
                    Пусто, как моя мотивация в понедельник 😅. <br />
                    Давай начинай добавлять задачи!
                </div>
            </div>
            <div className="footer">© 2025</div>
        </div>
    )
}

export default SetTasks;