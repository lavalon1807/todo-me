import { createContext, useState } from "react";

export const TasksContext = createContext(null);

export const TaskProvider = (props) => {
    const { children } = props;

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
            setText(prev => ({ ...prev, user: "" }));
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
        const updatedTasks = todo.map((task) => 
                task.id === id && (text.userDefault)
                    ? { ...task, task: text.userDefault, edit: false }
                    : { ...task, edit: false }
        )
        
        setTodo(updatedTasks);
        setFilteredTasks(filterTasks(filterPoint, updatedTasks));
    };

    const handleEditText = (id) => {
        const updatedTasks = todo.map((task) =>
            task.id === id ? { ...task, edit: !task.edit } : task,
        );
        setTodo(updatedTasks);
        setFilteredTasks(filterTasks(filterPoint, updatedTasks));
    };

    const handleChange = (evt) => {
        setText(prev => ({ ...prev, user: evt.target.value }));
    };

    const handleEditChange = (evt) => {
        setText(prev => ({ ...prev, userDefault: evt.target.value }));
    };

    const value = {
        addTask,
        toggleTask,
        handleEditText,
        handleEditChange,
        filterHandle,
        removeTask,
        addEditText,
        handleChange,
        unfinishTasks,
        filterPoint,
        allTask,
        filteredTasks,
        text,
    };

    return (
        <TasksContext.Provider
            value={value}
        >
            {children}
        </TasksContext.Provider>
    );
}