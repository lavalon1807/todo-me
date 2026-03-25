import "./MainPage.css";
import imageSelf from "../../images/fs_image.png";
import TasksList from "./TasksList";
import { useState } from "react";

const SetTasks = () => {
    const [todo, setTodo] = useState([]);

    return (
        <>
            <header className="mp__header theme">
                <h1 className="h1">Мои Задачи</h1>
            </header>
            <form className="mp__task">
                <input
                    className="mp__task_input"
                    type="text"
                    placeholder="Напиши свою задачу..."
                />
                <button className="button button-add" onClick={handleOnclick}>
                    +&nbsp;Добавить
                </button>
            </form>

            {/* <TasksList todo={todo} /> */}

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
