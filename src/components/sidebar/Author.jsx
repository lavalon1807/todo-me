import burgerBlack from "../../images/burger-black.svg";
import burgerWhite from "../../images/burger-white.svg";
import avatar from "../../images/avatar.png";
import "./sidebar.css";

const Author = ({night, burger, toggleBurger}) => {
    return (
        <>
            <div className={burger ? "burger show" : "burger"} onClick={toggleBurger}>
                <img src={night ? burgerWhite : burgerBlack} width="48" height="48" alt="картинка" />
            </div>
            <div className={burger ? "auth__navigation" : "auth__navigation hidden"} >
                <img src={avatar} width="89" height="89" alt="картинка" />
                <div className={night ? "login white" : "login"}>Egor Gennadich</div>
                <div className="email">cost_benefit@mail.ru</div>
            </div>
            <hr />
        </>
    );
};

export default Author;
