import "./AuthPage.css";
import { TasksContext } from "../../context/TasksContext";
import { useContext } from "react";

const SetTasks = ({ toggleMode, night }) => {
    const { getAuthorisation, authNameRef, authEmailRef } =
        useContext(TasksContext);

    //Вынесенные классы
    const getHeaderClass = () => (night ? "theme__dark" : "theme__light");
    const getTitleClass = () => (night ? "h1 white" : "h1");
    const getInputClass = () =>
        night ? "mp__task_input input__dark" : "mp__task_input";
    const getButtonClass = () =>
        night ? "button button-add input__dark" : "button button-add";
    const getFooterClass = () => (night ? "white mp__footer" : "mp__footer");

    return (
        <>
            <header className="mp__header">
                <span className={getHeaderClass()} onClick={toggleMode}></span>
                <h1 className={getTitleClass()}>Настройки</h1>
            </header>
            <form className="mp__task author" onSubmit={getAuthorisation}>
                <input
                    className={getInputClass()}
                    type="text"
                    placeholder="Пиши свои инициалы..."
                    ref={authNameRef}
                />
                <input
                    className={getInputClass()}
                    type="email"
                    placeholder="Напиши свою почту..."
                    ref={authEmailRef}
                />
                <button className={getButtonClass()} type="submit">
                    Войти
                </button>
            </form>

            <div className={getFooterClass()}>© 2026</div>
        </>
    );
};

export default SetTasks;
