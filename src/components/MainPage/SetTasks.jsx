import "./MainPage.css";
import imageSelf from "../../images/fs_image.png";
import TasksList from "./TasksList";
import { useState } from "react";

const SetTasks = () => {
    const [todo, setTodo] = useState([]);
    const [textUser, setTextUser] = useState("");

    const addTask = (evt) => {
        evt.preventDefault();
        if (textUser) {
            const newTask = {
                id: Date.now(),
                task: textUser,
                flag: false,
            }
            setTodo([...todo, newTask])
            setTextUser('');
        }
    }

    const removeTask = (id) => {
        const taskAfterRemove = todo.filter((obj) =>
            obj.id !== id
        )
        setTodo(taskAfterRemove)
    }

    const editTask = (id) => {
        setTodo([...todo.map((item) => item.id === id ? {...item, flag: !item.flag } : { ...item })])
    };

    const handleChange = (evt) => {
        setTextUser(evt.target.value);
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

            <TasksList key={todo.id} todoSetTask={todo} removeTask={removeTask} editTask={editTask} />

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
