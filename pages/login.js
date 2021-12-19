import { useSelector } from "react-redux";
import LoginForm from "../components/LoginForm";
import Logout from "../components/Logout";
import { selectUser } from "../features/userSlice";

const login = () => {
	const user = useSelector(selectUser);
	return <div>{user ? <Logout /> : <LoginForm />}</div>;
};

export default login;
