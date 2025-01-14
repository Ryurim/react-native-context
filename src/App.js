import React from "react";
import styled from "styled-components/native";
import User from "./components/User";
import UserContext from "./contexts/User";
import { UserProvider } from "./contexts/User";
import Input from "./components/Input";
import { SafeAreaView, View } from "react-native";
import Country from "./components/Country";

export const Container = styled.View`
    flex-direction: column;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`;

const App = () => {
    return (
        // <UserContext.Provider value={{ name: "Ryu rim" }}>
        //     <Container>
        //         <User />
        //     </Container>
        // </UserContext.Provider>
        // <UserProvider>
        //     <Container>
        //         <User />
        //         <Input />
        //     </Container>
        // </UserProvider>
        <SafeAreaView>
            <Country value="안녕" />
            <Country value="Hello" />
            <Country value="Bonjour" />
        </SafeAreaView>
    );
};

export default App;
