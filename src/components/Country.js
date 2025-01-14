import { Container } from "../App";
import { UserProvider } from "../contexts/User";
import User from "./User";
import Input from "./Input";

const Country = ({ value }) => {
    return (
        <UserProvider value={value}>
            <Container>
                <User />
                <Input />
            </Container>
        </UserProvider>
    );
};

export default Country;
