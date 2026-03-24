import "./MainPage.css";
import imageSelf from "../../images/fs_image.png";

const SetTasks = () => {
    return (
        <>
            <header className="mp__header theme">
                <h1 class="h1">Мои Задачи</h1>
            </header>
            <div className="mp__task">
                <input className="mp__task_input" type="text" placeholder="Напиши свою задачу..." />
                <button className="button button-add">+&nbsp;Добавить</button>
            </div>

            <div className="mp__info hidden">
                <img className="info__picture" src={imageSelf} alt="Картинка" />
                <div className="info__text">
                    Пусто, как моя мотивация в&nbsp;понедельник 😅. <br />
                    Давай начинай добавлять задачи!
                </div>
            </div>
        </>
    );
};

export default SetTasks;
