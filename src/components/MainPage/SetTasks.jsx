import "./MainPage.css";
import imageSelf from "../../images/self.svg";
import TasksList from "./TasksList";
import { useState, createContext } from "react";

export const UserContext = createContext(null);

const SetTasks = ({ toggleMode, night }) => {
    const [todo, setTodo] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filterPoint, setFilterPoint] = useState("Все");

    const [text, setText] = useState({
        user: "",
        userDefault: "",
    });

    const unfinishTasks = todo.filter((item) => !item.flag).length;
    const allTask = todo.length;

    const filterTasks = (filterType, tasksArray) => {
        switch (filterType) {
            case "Активные":
                return tasksArray.filter(obj => !obj.flag);
            case "Завершенные":
                return tasksArray.filter(obj => obj.flag);
            default:
                return tasksArray;
        }
    };

    const filterHandle = (name) => {
        setFilterPoint(name);
        const filtered = filterTasks(name, todo);
        setFilteredTasks(filtered);
    };

    const addTask = (evt) => {
        evt.preventDefault();
        if (text.user) {
            const newTask = {
                id: Date.now(),
                task: text.user,
                flag: false,
                edit: false,
            };
            const updatedTasks = [...todo, newTask];
            setTodo(updatedTasks);
            setFilteredTasks(filterTasks(filterPoint, updatedTasks));
            setText(prev => ({...prev, user: ""}));
        }
    };

    const removeTask = (id) => {
        const taskAfterRemove = todo.filter((obj) => obj.id !== id);
        setTodo(taskAfterRemove);
        setFilteredTasks(filterTasks(filterPoint, taskAfterRemove));
    };

    const toggleTask = (id) => {
        const updatedTasks = todo.map((task) =>
            task.id === id ? { ...task, flag: !task.flag } : task,
        );
        setTodo(updatedTasks);
        setFilteredTasks(filterTasks(filterPoint, updatedTasks));
    };

    const addEditText = (id) => {
        if (text.userDefault) {
            const updatedTasks = todo.map((task) =>
                task.id === id
                    ? { ...task, task: text.userDefault, edit: false }
                    : task,
            );
            setTodo(updatedTasks);
            setFilteredTasks(filterTasks(filterPoint, updatedTasks));
            setText(prev => ({...prev, userDefault: ""}));
        }
    };

    const handleEditText = (id) => {
        const updatedTasks = todo.map((task) =>
            task.id === id ? { ...task, edit: !task.edit } : task,
        );
        setTodo(updatedTasks);
        setFilteredTasks(filterTasks(filterPoint, updatedTasks));
    };

    const handleChange = (evt) => {
        setText(prev => ({...prev, user: evt.target.value}));
    };

    const handleEditChange = (evt) => {
        setText(prev => ({...prev, userDefault: evt.target.value}));
    };

    //Вынесенные классы
    const getHeaderClass = () => night ? "theme__dark" : "theme__light";
    const getTitleClass = () => night ? "h1 white" : "h1";
    const getInputClass = () => night ? "mp__task_input input__dark" : "mp__task_input";
    const getButtonClass = () => night ? "button button-add input__dark" : "button button-add";
    const getInfoTextClass = () => night ? "info__text white" : "info__text";
    const getFooterClass = () => night ? "white mp__footer" : "mp__footer";
    const getInfoClassName = () => allTask === 0 ? "mp__info" : "hidden mp__info";

    const value = {
        toggleTask,
        handleEditText,
        handleEditChange,
        filterHandle,
        removeTask,
        addEditText,
        unfinishTasks,
        filterPoint,
        allTask,
        filteredTasks,
    };

    return (
        <UserContext.Provider 
            value={value}
        >
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
                © 2025
            </div>
        </UserContext.Provider>
    );
};

export default SetTasks;
