import burger from "../../images/burger.png";
import "./sidebar.css";

const Author = () => {
    return (
        <>
            <div className="burger">
                <img src={burger} width="48" height="48" alt="картинка" />
            </div>
            <hr />
            <div className="hidden">
                <img src="myImage" alt="картинка" />
                <div className="login">Egor Gennadich</div>
                <div className="email">cost_benefit@mail.ru</div>
            </div>
        </>
    );
};

export default Author;
