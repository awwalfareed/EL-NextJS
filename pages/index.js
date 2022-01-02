import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import LoginIn from "./login";
import { selectUser } from "../redux/userSlice";
import Logout from "../components/Logout";
import { useSelector } from "react-redux";

export default function Home() {
	const user = useSelector(selectUser);

	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div>{user ? <Logout /> : <LoginIn />}</div>;
		</>
	);
}
