import burger from "../../images/burger.png";
import avatar from "../../images/avatar.png";
import "./sidebar.css";

const Author = () => {
    return (
        <>
            <div className="burger show">
                <img src={burger} width="48" height="48" alt="картинка" />
            </div>
            <div className="auth__navigation hidden">
                <img src={avatar} width="89" height="89" alt="картинка" />
                <div className="login">Egor Gennadich</div>
                <div className="email">cost_benefit@mail.ru</div>
            </div>
            <hr />
        </>
    );
};

export default Author;
