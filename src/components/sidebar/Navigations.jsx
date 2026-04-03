import { useState } from "react";
import { MENU_ITEMS } from "../../mocks/constants";

const Navigations = ({night, burger}) => {
    const [check, setCheck] = useState("empty");
    
    return (
        <>
            {MENU_ITEMS.map((item) => 
                <div 
                    key={item.id}
                    className={`button__info ${check === item.id ? "active" : ""} ${burger ? "show" : ""}`}
                    onClick={() => setCheck(item.id)}
                >
                    <img
                        className="icon"
                        src={night && item.iconDark ? item.iconDark : item.icon}
                        width="48"
                        height="48"
                        alt={item.name}
                    />
                    <p className={`text ${burger ? "" : "hidden"} ${burger && night ? "white" : ""}`}>{item.name}</p>
                </div>

            )};
        </>
    );
};

export default Navigations;
