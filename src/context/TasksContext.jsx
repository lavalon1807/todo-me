import { createContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const TasksContext = createContext(null);

export const TaskProvider = (props) => {
    const { children } = props;

    const [todo, setTodo] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filterPoint, setFilterPoint] = useState("Все");

    const [textInput, setTextInput] = useState({
        user: "",
        userDefault: "",
        authName: "Ваши инициалы!",
        authEmail: "Ваш почтовый адрес!",
    });

    let authNameRef = useRef();
    let authEmailRef = useRef();
    const navigate = useNavigate();

    const getAuthorisation = (evt) => {
        evt.preventDefault();
        setTextInput((prev) => ({
            ...prev,
            authName: authNameRef.current.value,
            authEmail: authEmailRef.current.value,
        }));
        authNameRef.current.value = "";
        authEmailRef.current.value = "";
        navigate("/");
    };

    const unfinishTasks = todo.filter((item) => !item.flag).length;
    const allTask = todo.length;

    const filterTasks = (filterType, tasksArray) => {
        switch (filterType) {
            case "Активные":
                return tasksArray.filter((obj) => !obj.flag);
            case "Завершенные":
                return tasksArray.filter((obj) => obj.flag);
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
        if (textInput.user) {
            const newTask = {
                id: Date.now(),
                text: textInput.user,
                flag: false,
            };
            const updatedTasks = [...todo, newTask];
            setTodo(updatedTasks);
            setFilteredTasks(filterTasks(filterPoint, updatedTasks));
            setTextInput((prev) => ({ ...prev, user: "" }));
        }
    };

    const removeTask = (id) => {
        const taskAfterRemove = todo.filter((obj) => obj.id !== id);
        setTodo(taskAfterRemove);
        setFilteredTasks(filterTasks(filterPoint, taskAfterRemove));
    };

    const toggleTask = (id) => {
        const updatedTasks = todo.map((item) =>
            item.id === id ? { ...item, flag: !item.flag } : item,
        );
        setTodo(updatedTasks);
        setFilteredTasks(filterTasks(filterPoint, updatedTasks));
    };

    const addEditText = (id) => {
        const updatedTasks = todo.map((item) =>
            item.id === id && textInput.userDefault
                ? { ...item, text: textInput.userDefault }
                : item,
        );

        setTodo(updatedTasks);
        setFilteredTasks(filterTasks(filterPoint, updatedTasks));
    };

    const handleChange = (evt) => {
        setTextInput((prev) => ({ ...prev, user: evt.target.value }));
    };

    const handleEditChange = (evt) => {
        setTextInput((prev) => ({ ...prev, userDefault: evt.target.value }));
    };

    const value = {
        addTask,
        toggleTask,
        handleEditChange,
        filterHandle,
        removeTask,
        addEditText,
        handleChange,
        unfinishTasks,
        filterPoint,
        allTask,
        filteredTasks,
        textInput,
        getAuthorisation,
        authNameRef,
        authEmailRef,
    };

    return (
        <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
    );
};
