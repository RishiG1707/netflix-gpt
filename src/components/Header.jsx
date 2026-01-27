import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, USER_ICON } from "../utils/constants";

const Header = () => {
	const [show, setShow] = useState(false);
	const [clicked, setClicked] = useState(false);

	const dispatch = useDispatch();

	const navigate = useNavigate();

	const user = useSelector((store) => store.user);

	const handleButtonClick = () => {
		setShow(!show);
		setClicked(!clicked);
	};

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {})
			.catch((error) => {
				navigate("/error");
			});
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			if (user) {
				const { uid, email, displayName } = user;
				dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
				navigate("/browse");
			} else {
				dispatch(removeUser());
				navigate("/");
			}
		});

		// Unsubscribe when component mounts
		return () => unsubscribe();
	}, []);

	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
			<img className="w-48" src={LOGO} alt="logo" />
			{user && (
				<div className="flex p-3">
					<img
						className="w-10 h-10 mt-4 rounded-lg"
						src={USER_ICON}
						alt="user-icon"
					/>
					<button
						className="py-2 px-4 text-3xl text-white hover:scale-125"
						onClick={handleButtonClick}
					>
						{" "}
						{!clicked ? "⌄" : "˄"}
					</button>
					{show && (
						<div className="w-15 text-sm pt-4 text-white ">
							<button
								className="bg-black/85 py-2 px-2 rounded-lg transition duration-3000 ease-in-outhover:scale-110 transform "
								onClick={handleSignOut}
							>
								Sign out
							</button>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Header;
