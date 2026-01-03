import { useState } from "react";
import Header from "./Header";

const Login = () => {
	const [isSignInForm, setIsSignInForm] = useState(true);

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
			<form className="w-1/4 absolute p-12 bg-black/85 my-36 mx-auto right-0 left-0 text-white">
				<h1 className="font-bold text-3xl py-4 px-4">
					{isSignInForm ? "Sign In" : "Sign Up"}
				</h1>
				{!isSignInForm && (
					<input
						type="text"
						placeholder="Full Name"
						className="p-4 m-4 w-full bg-transparent rounded opacity-80 border border-gray-400 from-inherit placeholder-slate-300"
					/>
				)}
				<input
					type="text"
					placeholder="Email or mobile number"
					className="p-4 m-4 w-full bg-transparent rounded opacity-80 border border-gray-400 from-inherit placeholder-slate-300
                    "
				/>
				<input
					type="password"
					placeholder="Password"
					className="p-4 m-4 w-full bg-transparent rounded opacity-80 border border-gray-400 from-inherit placeholder-slate-300"
				/>
				<button className="p-2 m-4 w-full bg-red-700 font-semibold rounded hover:bg-red-800">
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
