import React from "react";
import "./App.css";
import Author from "./components/sidebar/Author";
import Navigations from "./components/sidebar/Navigations";
import SetTasks from "./components/MainPage/SetTasks";
import { useState } from "react";

function App() {
    const [night, setNight] = useState(false);

    const toggleMode = () => {
        setNight(!night);
    }

    return (
        <div className={night ? 'App app__dark' : 'App'}>
            <div className={night ? 'burger__page bar__dark' : 'burger__page'}>
                <Author />
                <Navigations />
            </div>
            <div className="main__page wrapper">
                <SetTasks toggleMode={toggleMode} night={night} />
            </div>
        </div>
    );
}

export default App;
