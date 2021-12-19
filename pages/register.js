import React from "react";
import RegisterForm from "../components/RegisterForm";
import { useSelector } from "react-redux";

import SuccessForm from "../components/SuccessForm";
import { selectUser } from "../features/userSlice";

const register = () => {
	const user = useSelector(selectUser);
	return <div>{user ? <SuccessForm /> : <RegisterForm />}</div>;
};

export default register;
