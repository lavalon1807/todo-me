import "./MainPage.css";
import imageSelf from "../../images/self.svg";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";

const SetTasks = ({ toggleMode, night }) => {

    const { allTask, text, getAuthorisation, handleAuthChange } = useContext(TasksContext);

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
                <h1 className={getTitleClass()}>Настройки</h1>
            </header>
            <form className="mp__task" onSubmit={getAuthorisation}>
                <input
                    className={getInputClass()}
                    type="text"
                    placeholder="Пиши свои инициалы..."
                    onChange={handleAuthChange}
                    value={text.authName}
                />
                <input
                    className={getInputClass()}
                    type="email"
                    placeholder="Напиши свою почту..."
                    // onChange={handleChange}
                    // value={text.user}
                />
                <button
                    className={getButtonClass()}
                    type="submit"
                    >
                    Войти
                </button>
            </form>

            <div
                className={getInfoClassName()}>
                <img className="info__picture" src={imageSelf} alt="Картинка" />
                <div className={getInfoTextClass()}>
                    Давай уже регистрируйся и цени мою приложуху 😅. <br />
                    Яж старался!
                </div>
            </div>

            <div className={getFooterClass()}>
                © 2025
            </div>
        </>
    );
};

export default SetTasks;
