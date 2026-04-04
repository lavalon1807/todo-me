import "./App.css";
import Author from "./components/sidebar/Author";
import Navigations from "./components/sidebar/Navigations";
import SetTasks from "./components/MainPage/SetTasks";
import AuthPage from "./components/authorization/AuthPage";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
        <BrowserRouter>
            <TaskProvider>
                <div className={night ? 'App app__dark' : 'App'}>
                    <div className={`${night ? 'burger__page bar__dark' : 'burger__page'} ${burger ? "show" : ""}`}>
                        <Author night={night} burger={burger} toggleBurger={toggleBurger} />
                        <Navigations night={night} burger={burger} />
                    </div>
                    <div className="main__page wrapper">
                        <Routes>
                            <Route path="/" element={<SetTasks toggleMode={toggleMode} night={night} />} />
                            <Route path="/auth" element={<AuthPage toggleMode={toggleMode} night={night} />} />
                        </Routes>
                    </div>
                </div>
            </TaskProvider>
        </BrowserRouter>
    );
}

export default App;
