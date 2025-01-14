import React, { createContext, useEffect, useState } from "react";
import { Text } from "react-native";

// const UserContext = createContext({ name: "rimnim" });

const UserContext = createContext({
    user: { name: "" },
    dispatch: () => {},
    hi: { text: "" },
});

const UserProvider = ({ children, value }) => {
    const [name, setName] = useState("rim__nim");
    const [text, setText] = useState("Hi");

    useEffect(() => {
        if (value) {
            setText(value);
        }
    }, [value]);

    const valueContext = { user: { name }, dispatch: setName, hi: { text } };
    return (
        <UserContext.Provider value={valueContext}>
            {children}
            {/* <Text>gg</Text> */}
        </UserContext.Provider>
    );
};

const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
export default UserContext;
