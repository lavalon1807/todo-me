import React from "react";
import "./App.css";
import Author from "./components/sidebar/Author";
import Navigations from "./components/sidebar/Navigations";
import SetTasks from "./components/MainPage/SetTasks";
import Task from "./components/MainPage/Task";

function App() {
    return (
        <div className="App">
            <div className="burger__page">
                <Author />
                <Navigations />
            </div>
            <div class="main__page wrapper">
                <SetTasks />
                <Task />
            </div>
        </div>
    );
}

export default App;
