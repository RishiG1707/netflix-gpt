import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/validate";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);
	const [errorMessage, setErrorMessage] = useState(null);

	const name = useRef(null);
	const email = useRef(null);
	const password = useRef(null);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleButtonClick = () => {
		// Validate the form data
		// console.log(email.current.value);
		// console.log(password.current.value);

		const message = checkValidData(email.current.value, password.current.value);
		setErrorMessage(message);

		if (message) return;

		//sign up/ sign in
		if (!isSignInForm) {
			//sign up logic
			createUserWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed up
					const user = userCredential.user;
					updateProfile(user, {
						displayName: name.current.value,
					})
						.then(() => {
							console.log(user);
							const { uid, email, displayName } = auth.currentUser;
							dispatch(
								addUser({ uid: uid, email: email, displayName: displayName })
							);
							navigate("/browse");
						})
						.catch((error) => {
							setErrorMessage(error.message);
						});
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
					// ..
				});
		} else {
			//sign in logic
			signInWithEmailAndPassword(
				auth,
				email.current.value,
				password.current.value
			)
				.then((userCredential) => {
					// Signed in
					const user = userCredential.user;
					console.log(user);
					navigate("/browse");
				})
				.catch((error) => {
					const errorCode = error.code;
					const errorMessage = error.message;
					setErrorMessage(errorCode + "-" + errorMessage);
				});
		}
	};

	const toggleSignInForm = () => {
		setIsSignInForm(!isSignInForm);
	};

	return (
		<div>
			<Header />
			<div className="absolute">
				<img
					src="https://assets.nflxext.com/ffe/siteui/vlv3/e8136cfe-c5b7-464f-8c26-d68d676e0916/web/IN-en-20251229-TRIFECTA-perspective_c50c689c-0d42-413b-bd09-f4fc62fbec13_medium.jpg"
					alt="background"
				/>
			</div>
			<form
				onSubmit={(e) => e.preventDefault()}
				className="w-1/4 absolute p-12 bg-black/85 my-36 mx-auto right-0 left-0 text-white"
			>
				<h1 className="font-bold text-3xl py-4 px-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						ref={name}
						type="text"
						placeholder="Full Name"
						className="p-4 m-4 w-full bg-transparent rounded opacity-80 border border-gray-400 from-inherit placeholder-slate-300"
					/>
				)}
				<input
					ref={email}
					type="text"
					placeholder="Email or mobile number"
					className="p-4 m-4 w-full bg-transparent rounded opacity-80 border border-gray-400 from-inherit placeholder-slate-300
                    "
				/>
				{errorMessage === "Email" && (
					<p className="text-red-500 px-4 text-sm mx-2 font-bold">
						Enter a valid Email Id
					</p>
				)}
				<input
					ref={password}
					type="password"
					placeholder="Password"
					className="p-4 m-4 w-full bg-transparent rounded opacity-80 border border-gray-400 from-inherit placeholder-slate-300"
				/>
				{errorMessage === "Password" ? (
					<p className="text-red-500 px-4 mx-2 text-sm font-bold">
						Enter a valid Password
					</p>
				) : (
					<p className="text-red-500 px-4 mx-2 text-sm font-bold">
						{errorMessage}
					</p>
				)}
				<button
					className="p-2 m-4 w-full bg-red-700 font-semibold rounded hover:bg-red-800"
					onClick={handleButtonClick}
				>
					{isSignInForm ? "Sign In" : "Sign Up"}
				</button>
				<div className="flex p-4">
					<p className="text-gray-400 cursor-pointer">
						{isSignInForm ? "New to Netflix?" : "Already registered?"}
					</p>
					<p className="cursor-pointer" onClick={toggleSignInForm}>
						{isSignInForm ? "Sign up now." : "Sign in now."}
					</p>
				</div>
			</form>
		</div>
	);
};

export default Login;
