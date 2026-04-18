import { createContext, useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const TasksContext = createContext(null);

export const TaskProvider = (props) => {
    const { children } = props;

    const [todo, setTodo] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [filterPoint, setFilterPoint] = useState("Все");
    const [check, setCheck] = useState("empty");

    const [textInput, setTextInput] = useState({
        user: "",
        userDefault: "",
        authName: "Ваши инициалы!",
        authEmail: "Ваш почтовый адрес!",
    });

    let authNameRef = useRef();
    let authEmailRef = useRef();
    const navigate = useNavigate();

    const URL = "http://31.129.99.205";

    useEffect(() => {

        axios.get(`${URL}/tasks`)
            .then(response => {
                const newMass = response.data;
                setTodo(newMass);
                setFilteredTasks(newMass);
            })
            .catch(error => console.log(error))

    }, [])

    const getAuthorisation = (evt) => {
        evt.preventDefault();

        if (authNameRef.current.value === "" || authEmailRef.current.value === "") return;
        
        setTextInput((prev) => ({
            ...prev,
            authName: authNameRef.current.value,
            authEmail: authEmailRef.current.value,
        }));
        setCheck("empty");
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

        try {
            const newTask = {
                text: textInput.user,
                done: false,
            };

            // Отправляем на сервер
            await axios.post(`${URL}/tasks`, newTask);

            // ПОЛУЧАЕМ ВСЕ ЗАДАЧИ ЗАНОВО (с правильными ID)
            axios.get(`${URL}/tasks`)
                .then(response => {
                    const newMass = response.data;
                    setTodo(newMass);
                    setFilteredTasks(filterTasks(filterPoint, newMass));
                })
                .catch(error => console.log(error))

            textInput.user = '';

        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

    const removeTask = async (id) => {
        try {
            await axios.delete(`${URL}/${id}`);

            const taskAfterRemove = todo.filter((obj) => obj.id !== id);
            setTodo(taskAfterRemove);
            setFilteredTasks(filterTasks(filterPoint, taskAfterRemove));
        } catch (error) {
            console.error('Ошибка при удалении', error);
        }
    };

    const toggleTask = async (id) => {
        const currentTask = todo.find(item => item.id === id);
        
        try {
            const updatedTasks = {
                text: currentTask.text,
                done: !currentTask.done,
            };

            await axios.put(`${URL}/tasks?task_id=${id}`, updatedTasks);

            const newUpdatedTasks = todo.map((item) =>
                item.id === id ? { ...item, done: !item.done } : item,
            );

            setTodo(newUpdatedTasks);
            setFilteredTasks(filterTasks(filterPoint, newUpdatedTasks));

        } catch (error) {
            console.error('Выявлена ошибка:', error);
        }
    };

    const addEditText = async (id) => {
        const currentTask = todo.find(item => item.id === id);


        const taskData = {
            text: textInput.userDefault,
            done: currentTask.done,
        };

        try {
            await axios.put(`${URL}/tasks?task_id=${id}`, taskData);

            const updatedTasks = todo.map((item) =>
                item.id === id && textInput.userDefault
                    ? { ...item, text: textInput.userDefault }
                    : item,
            );

            setTodo(updatedTasks);
            setFilteredTasks(filterTasks(filterPoint, updatedTasks));
        } catch (error) {
            console.error("Возникла ошибка", error);
        }
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
        setCheck,
        check,
    };

    return (
        <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
    );
};
