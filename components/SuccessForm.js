import { signup, selectUser } from "../features/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Link from "next/link";

const SuccessForm = () => {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	const handleLogout = (e) => {
		e.preventDefault();

		dispatch(signup());
	};
	return (
		<div>
			<h1>Your request have received! </h1>
			<p>Please login in</p>
			<a href="/login">
				<span>here</span>
			</a>
		</div>
	);
};

export default SuccessForm;