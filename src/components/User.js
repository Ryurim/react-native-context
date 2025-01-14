import React, { useContext } from "react";
import styled from "styled-components/native";
import UserContext from "../contexts/User";
import { UserConsumer } from "../contexts/User";

const StyledText = styled.Text`
    font-size: 24px;
    margin: 10px;
`;

// const User = () => {
//     return (
//         // <UserContext.Provider value={{ name: "rim__nim" }}>
//         //     <UserContext.Consumer>{(value) => <StyledText>Name: {value.name}</StyledText>}</UserContext.Consumer>
//         // </UserContext.Provider>
//         <UserConsumer>{({ user }) => <StyledText>Name: {user.name}</StyledText>}</UserConsumer>
//     );
// };

const User = () => {
    const { user, hi } = useContext(UserContext);
    return (
        <StyledText>
            {hi.text}! {user.name}
        </StyledText>
    );
};

export default User;
