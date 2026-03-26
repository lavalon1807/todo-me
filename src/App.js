import React from "react";
import "./App.css";
import Author from "./components/sidebar/Author";
import Navigations from "./components/sidebar/Navigations";
import SetTasks from "./components/MainPage/SetTasks";

function App() {
    return (
        <div className="App">
            <div className="burger__page">
                <Author />
                <Navigations />
            </div>
            <div className="main__page wrapper">
                <SetTasks />
            </div>
        </div>
    );
}

export default App;
