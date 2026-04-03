import burgerBlack from "../../images/burger-black.svg";
import burgerWhite from "../../images/burger-white.svg";
import avatar from "../../images/avatar.png";
import "./sidebar.css";

const Author = ({night, burger, toggleBurger}) => {
    return (
        <>
            <div className={`burger ${burger ? "show" : ""}`} onClick={toggleBurger}>
                <img src={night ? burgerWhite : burgerBlack} width="48" height="48" alt="картинка" />
            </div>
            <div className={`auth__navigation ${burger ? "" : "hidden"}`} >
                <img src={avatar} width="89" height="89" alt="картинка" />
                <div className={`login ${night ? " white" : ""}`}>Egor Gennadich</div>
                <div className="email">cost_benefit@mail.ru</div>
            </div>
            <hr />
        </>
    );
};

export default Author;
