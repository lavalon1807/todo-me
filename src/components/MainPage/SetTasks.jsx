import "./MainPage.css";
import imageSelf from "../../images/fs_image.png";
import TasksList from "./TasksList";
import { useState } from "react";

const SetTasks = () => {
    const [todo, setTodo] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [textUser, setTextUser] = useState("");
    const [textDefaultUser, setTextDefaultUser] = useState("");
    const [filterPoint, setFilterPoint] = useState('Все');

    const filterList = [
        {
            'name': "Все",
        },
        {
            'name': "Активные",
        },
        {
            'name': "Завершенные",
        },
    ];

    const filterTasks = (filterType, tasksArray) => {
        switch (filterType) {
            case "Активные":
                return tasksArray.filter(obj => !obj.flag);
            case "Завершенные":
                return tasksArray.filter(obj => obj.flag);
            default:
                return tasksArray;
        }
    }

    const filterHandle = (name) => {
        setFilterPoint(name);
        const filtered = filterTasks(name, todo);
        setFilteredTasks(filtered);
    }

    const addTask = (evt) => {
        evt.preventDefault();
        if (textUser) {
            const newTask = {
                id: Date.now(),
                task: textUser,
                flag: false,
                edit: false,
            }
            const updatedTasks = [...todo, newTask];
            setTodo(updatedTasks)
            setFilteredTasks(filterTasks(filterPoint, updatedTasks));
            setTextUser('');
        }
    }

    const removeTask = (id) => {
        const taskAfterRemove = todo.filter((obj) =>
            obj.id !== id
        )
        setTodo(taskAfterRemove)
        setFilteredTasks(filterTasks(filterPoint, taskAfterRemove));
    }

    const toggleTask = (id) => {
        const updatedTasks = todo.map(task =>
            task.id === id ? { ...task, flag: !task.flag } : task
        );
        setTodo(updatedTasks)
        setFilteredTasks(filterTasks(filterPoint, updatedTasks));
    };

    const addEditText = (id) => {
        if (textDefaultUser) {
            const updatedTasks = todo.map(task =>
                task.id === id ? { ...task, task: textDefaultUser, edit: false } : task
            );
            setTodo(updatedTasks);
            setFilteredTasks(filterTasks(filterPoint, updatedTasks));
            setTextDefaultUser('');
        }
    };

    const handleEditText = (id) => {
        const updatedTasks = todo.map(task =>
            task.id === id ? { ...task, edit: !task.edit } : task
        );
        setTodo(updatedTasks);
        setFilteredTasks(filterTasks(filterPoint, updatedTasks));
    };

    const handleChange = (evt) => {
        setTextUser(evt.target.value);
    }

    const handleEditChange = (evt) => {
        setTextDefaultUser(evt.target.value)
    }

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
                    onChange={handleChange}
                    value={textUser}
                />
                <button className="button button-add" onClick={addTask}>
                    +&nbsp;Добавить
                </button>
            </form>

            <TasksList
                key={todo.id}
                todoSetTask={filteredTasks}
                removeTask={removeTask}
                toggleTask={toggleTask}
                handleEditText={handleEditText}
                handleChange={handleChange}
                addTask={addTask}
                addEditText={addEditText}
                handleEditChange={handleEditChange}
                textDefaultUser={textDefaultUser}
                filterList={filterList}
                filterHandle={filterHandle}
                filterPoint={filterPoint}
            />

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
