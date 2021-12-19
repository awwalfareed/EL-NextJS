import Head from "next/head";
import {
	FaFacebook,
	FaLinkedin,
	FaGoogle,
	FaRegEnvelope,
} from "react-icons/fa";
import { MdLockOutline } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { useState, useEffect } from "react";
import { signup } from "../features/userSlice";
import { useDispatch } from "react-redux";

export default function RegisterForm() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(
			signup({
				name: name,
				email: email,
				password: password,
				signUp: true,
			})
		);
	};

	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
				<div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
					<div className="w-3/5 p-5">
						<div className="text-left font-bold">
							<span className="text-blue-500">True</span>TN
						</div>
						<div className="py-10">
							<h2 className="text-3xl font-bold text-blue-500 mb-2">Sign Up</h2>
							<div className="border-2 w-10 border-blue-500 inline-block mb-2"></div>
							<div className="flex justify-center my-2">
								<a
									href="#"
									className="border-2 border-gray-200 rounded-full p-3 mx-1"
								>
									<FaFacebook className="text-sm" />
								</a>
								<a
									href="#"
									className="border-2 border-gray-200 rounded-full p-3 mx-1"
								>
									<FaLinkedin className="text-sm" />
								</a>
								<a
									href="#"
									className="border-2 border-gray-200 rounded-full p-3 mx-1"
								>
									<FaGoogle className="text-sm" />
								</a>
							</div>
							<p className="text-gray-400 my-3">or use your email</p>
							<form
								className="flex flex-col items-center"
								onSubmit={(e) => handleSubmit(e)}
							>
								<div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
									<BsFillPersonFill className="text-gray-400 m-2" />
									<input
										type="name"
										name="name"
										placeholder="Name"
										className="bg-gray-100
										outline-none text-sm
                    flex-1"
										value={name}
										onChange={(e) => setName(e.target.value)}
									/>
								</div>
								<div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
									<FaRegEnvelope className="text-gray-400 m-2" />
									<input
										type="email"
										name="email"
										placeholder="Email"
										className="bg-gray-100
										outline-none text-sm
                    flex-1"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
									/>
								</div>
								<div className="bg-gray-100 w-64 p-2 flex items-center mb-3">
									<MdLockOutline className="text-gray-400 m-2" />
									<input
										type="password"
										name="password"
										placeholder="Password"
										className="bg-gray-100
										outline-none text-sm
                    flex-1"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
									/>
								</div>
								<div className="flex justify-between w-64 mb-5">
									<label className="flex items-center text-xs">
										<input type="checkbox" name="remember" className="mr-1" />
										Remember me
									</label>
									<a href="#" className="text-xs">
										Forgot Password?
									</a>
								</div>
								<button
									href="#"
									className="border-2 border-blue-500 text-blue-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-blue-500 hover:text-white"
									type="submit"
								>
									Sign Up
								</button>
							</form>
						</div>
					</div>

					<div className="w-2/5 bg-blue-500 text-white hover:bg-blue-500 hover:text-white-500 rounded-tr-2xl rounded-br-2xl py-36 px-12">
						<h2 className="text-3xl font-bold mb-2">Hello, Firends</h2>
						<div className="border-2 w-10 border-white inline-block mb-2"></div>
						<p className="mb-10">
							Fill out your personal information to join us{" "}
						</p>
						<a
							href="/login"
							className="border-2 border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-blue-500"
						>
							Sign In
						</a>
					</div>
				</div>
			</main>
		</div>
	);
}
