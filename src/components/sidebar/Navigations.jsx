import { useState, useEffect } from "react";
import { Link } from "react-router";
import { MENU_ITEMS } from "../../mocks/constants";
import { useLocation, useNavigate } from 'react-router-dom';

const Navigations = ({night, burger}) => {
    const [check, setCheck] = useState("empty");

    const location = useLocation();
    const navigate = useNavigate();
    
    useEffect(() => {
        if (location.pathname !== '/') {
            navigate('/');
        }
    },[]);
    
    return (
        <>
            {MENU_ITEMS.map((item) => 
                <Link
                    to={item.link}
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
                </Link>

            )};
        </>
    );
};

export default Navigations;
