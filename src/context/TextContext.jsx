import { createContext } from "react";

export const UserContext = createContext(null);

export const TaskProvider = (props) => {
    const { children } = props;
    return (
        <UserContext.Provider
            // value={value}
        >
            {children}
        </UserContext.Provider>
    );
}