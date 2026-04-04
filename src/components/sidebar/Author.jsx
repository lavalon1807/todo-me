import burgerBlack from "../../images/burger-black.svg";
import burgerWhite from "../../images/burger-white.svg";
import avatar from "../../images/avatar.png";
import "./sidebar.css";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

const Author = ({night, burger, toggleBurger}) => {
    const {text, userAuth } = useContext(TasksContext);
    return (
        <>
            <div className={`burger ${burger ? "show" : ""}`} onClick={toggleBurger}>
                <img src={night ? burgerWhite : burgerBlack} width="48" height="48" alt="картинка" />
            </div>
            <div className={`auth__navigation ${burger ? "" : "hidden"}`} >
                <img src={avatar} width="89" height="89" alt="картинка" />
                <div className={`login ${night ? " white" : ""}`}></div>
                <div className="email"></div>
            </div>
            <hr />
        </>
    );
};

export default Author;
