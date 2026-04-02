import React from "react";
import "./App.css";
import Author from "./components/sidebar/Author";
import Navigations from "./components/sidebar/Navigations";
import SetTasks from "./components/MainPage/SetTasks";
import { useState } from "react";
import { TaskProvider } from "./context/TasksContext";

function App() {
    const [night, setNight] = useState(false);
    const [burger, setBurger] = useState(false);

    const toggleMode = () => {
        setNight(!night);
    }

    const toggleBurger = () => {
        setBurger(!burger);
    }

    return (
        <TaskProvider>
            <div className={night ? 'App app__dark' : 'App'}>
                <div className={night ? 'burger__page bar__dark' : 'burger__page'}>
                    <Author night={night} burger={burger} toggleBurger={toggleBurger} />
                    <Navigations night={night} burger={burger} />
                </div>
                <div className="main__page wrapper">
                    <SetTasks toggleMode={toggleMode} night={night} />
                </div>
            </div>
        </TaskProvider>
    );
}

export default App;
