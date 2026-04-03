import iconMenu from "../images/menu.svg";
import iconMenuWhite from "../images/menu-white.svg";
import iconSetting from "../images/settings.svg";
import iconSettingWhite from "../images/settings-white.svg";

// Используется в копоненте TaskList

export const FILTER_LIST = [
    { name: "Все" },
    { name: "Активные" },
    { name: "Завершенные" },
];

// Используется в копоненте Navigations

export const MENU_ITEMS = [
    {id: "empty", name: "Мои задачи", icon: iconMenu, iconDark: iconMenuWhite},
    {id: "settings", name: "Настройка", icon: iconSetting, iconDark: iconSettingWhite},
]