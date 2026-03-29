import "./MainPage.css";
import imageSelf from "../../images/fs_image.png";
import TasksList from "./TasksList";
import { useState } from "react";

const SetTasks = () => {
    const [todo, setTodo] = useState([]);
    const [disTodo, setDisTodo] = useState([]);
    const [textUser, setTextUser] = useState("");
    const [textDefaultUser, setTextDefaultUser] = useState("");

    const [filter, setFilter] = useState('Все');

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

    const newFilterTodo = (filterType, todo) => {
        switch(filterType) {
            case "Активные":
                return todo.filter(obj => !obj.flag);
            case "Завершенные":
                return todo.filter(obj => obj.flag);
            default:
                return todo;
        }
    }

    const filterHandle = (name) => {
        setFilter(name);
        setDisTodo(newFilterTodo(name, todo))
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

    const toggleTask = (id) => {
        setTodo([...todo.map((item) => item.id === id ? { ...item, flag: !item.flag } : { ...item })])
    };

    const handleEditText = (id) => {
        setTodo([...todo.map((item) => item.id === id ? { ...item, edit: !item.edit } : { ...item })])
    }

    const handleChange = (evt) => {
        setTextUser(evt.target.value);
    }

    const handleEditChange = (evt) => {
        setTextDefaultUser(evt.target.value)
    }

    const addEditText = (id) => {
        if (textDefaultUser) {
            setTodo([...todo.map((item) => item.id === id ? { ...item, task: item.task = textDefaultUser } : { ...item })])
            setTodo([...todo.map((item) => item.id === id ? { ...item, edit: !item.edit } : { ...item })])
        }
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
                todoSetTask={todo}
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
                filter={filter}
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
