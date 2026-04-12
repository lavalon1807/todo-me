import { createContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

    const URL = "http://31.129.99.205/tasks";
    const delURL = "http://31.129.99.205";

    useEffect(() => {

        axios.get(URL)
            .then(response => {
                const newMass = response.data;
                setTodo(newMass);
                setFilteredTasks(newMass);
            })
            .catch(error => console.log(error))

    }, [])

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

    const unfinishTasks = todo.filter((item) => !item.done).length;
    const allTask = todo.length;

    const filterTasks = (filterType, tasksArray) => {
        switch (filterType) {
            case "Активные":
                return tasksArray.filter((obj) => !obj.done);
            case "Завершенные":
                return tasksArray.filter((obj) => obj.done);
            default:
                return tasksArray;
        }
    };

    const filterHandle = (name) => {
        setFilterPoint(name);
        const filtered = filterTasks(name, todo);
        setFilteredTasks(filtered);
    };

    const addTask = async (evt) => {
        evt.preventDefault();

        if (!textInput.user) return;

        const taskData = {
            text: textInput.user,
            done: false,
        };

        try {
            await axios.post(URL, taskData);

            const localTask = {
                id: Date.now(),
                text: textInput.user,
                done: false,
            };

            const newUbdateTask = [...todo, localTask];

            setTodo(newUbdateTask);
            setFilteredTasks(filterTasks(filterPoint, newUbdateTask));

        } catch (error) {
            console.error('Ошибка при добавлении', error)
        }
    };

    const removeTask = async (id) => {
        try {
            await axios.delete(`${delURL}/${id}`);

            const taskAfterRemove = todo.filter((obj) => obj.id !== id);
            setTodo(taskAfterRemove);
            setFilteredTasks(filterTasks(filterPoint, taskAfterRemove));
        } catch(error) {
            console.error('Ошибка при удалении', error);
        }
    };

    const toggleTask = (id) => {
        const updatedTasks = todo.map((item) =>
            item.id === id ? { ...item, done: !item.done } : item,
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
