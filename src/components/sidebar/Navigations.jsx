import iconMenu from "../../images/menu.png";
import iconSetting from "../../images/settings.svg";
import iconSettingWhite from "../../images/settings-white.svg";

const Navigations = ({night, burger}) => {
    return (
        <>
            <div className={`button__info active ${burger ? "show" : ""}`}>
                <img
                    className="icon"
                    src={iconMenu}
                    width="48"
                    height="48"
                    alt="Иконка"
                />
                <p className={`text ${burger ? "" : "hidden"}`}>Мои Задачи</p>
            </div>
            <div className={burger ? "button__info show" : "button__info"}>
                <img
                    className="icon"
                    src={night ? iconSettingWhite : iconSetting }
                    width="48"
                    height="48"
                    alt="Иконка"
                />
                <p className={`text ${burger && night ? "white" : burger ? "" : "hidden"}`}>Настройка</p>
            </div>
        </>
    );
};

export default Navigations;
