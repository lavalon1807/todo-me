import "./MainPage.css";
import imageSelf from "../../images/self.svg";
import TasksList from "./TasksList";
import {TasksContext} from "../../context/TasksContext";
import { useContext } from "react";

const SetTasks = ({ toggleMode, night }) => {

    const { allTask, addTask, handleChange, text } = useContext(TasksContext);

    //Вынесенные классы
    const getHeaderClass = () => night ? "theme__dark" : "theme__light";
    const getTitleClass = () => night ? "h1 white" : "h1";
    const getInputClass = () => night ? "mp__task_input input__dark" : "mp__task_input";
    const getButtonClass = () => night ? "button button-add input__dark" : "button button-add";
    const getInfoTextClass = () => night ? "info__text white" : "info__text";
    const getFooterClass = () => night ? "white mp__footer" : "mp__footer";
    const getInfoClassName = () => allTask === 0 ? "mp__info" : "hidden mp__info";

    return (
        <>
            <header className="mp__header">
                <span className={getHeaderClass()} onClick={toggleMode}></span>
                <h1 className={getTitleClass()}>Мои Задачи</h1>
            </header>
            <form className="mp__task" onSubmit={addTask}>
                <input
                    className={getInputClass()}
                    type="text"
                    placeholder="Напиши свою задачу..."
                    onChange={handleChange}
                    value={text.user}
                />
                <button
                    className={getButtonClass()}
                    type="submit"
                    >
                    +&nbsp;Добавить
                </button>
            </form>

            <TasksList />

            <div
                className={getInfoClassName()}>
                <img className="info__picture" src={imageSelf} alt="Картинка" />
                <div className={getInfoTextClass()}>
                    Пусто, как моя мотивация в&nbsp;понедельник 😅. <br />
                    Давай начинай добавлять задачи!
                </div>
            </div>

            <div className={getFooterClass()}>
                © 2026
            </div>
        </>
    );
};

export default SetTasks;
