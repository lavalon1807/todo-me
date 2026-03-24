import iconMenu from "../../images/menu.png";
import iconSetting from "../../images/settings.svg";

const Navigations = () => {
    return (
        <>
            <div className="button__info active">
                <img
                    className="icon"
                    src={iconMenu}
                    width="48"
                    height="48"
                    alt="Иконка"
                />
                <p className="text hidden">Мои Задачи</p>
            </div>
            <div className="button__info">
                <img
                    className="icon"
                    src={iconSetting}
                    width="48"
                    height="48"
                    alt="Иконка"
                />
                <p className="text hidden">Настройка</p>
            </div>
        </>
    );
};

export default Navigations;
