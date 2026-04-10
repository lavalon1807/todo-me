import burgerBlack from "../../images/burger-black.svg";
import burgerWhite from "../../images/burger-white.svg";
import "./sidebar.css";
import { useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

const Author = ({ night, burger, toggleBurger }) => {
    const { textInput } = useContext(TasksContext);
    return (
        <>
            <div
                className={`burger`}
                onClick={toggleBurger}>
                <img
                    src={night ? burgerWhite : burgerBlack}
                    width="48"
                    height="48"
                    alt="картинка"
                />
            </div>
            <div className={`auth__navigation ${burger ? "" : "hidden"}`}>
                <img
                    src="https://1avatara.ru/pic/kids/kids008.jpg"
                    width="89"
                    height="89"
                    alt="картинка"
                />
                <div className={`login ${night ? " white" : ""}`}>
                    {textInput.authName}
                </div>
                <div className="email">{textInput.authEmail}</div>
            </div>
            <hr />
        </>
    );
};

export default Author;
