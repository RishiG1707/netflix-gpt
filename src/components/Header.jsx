import { signOut } from "firebase/auth";
import { useState } from "react";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
	const [show, setShow] = useState(false);

	const navigate = useNavigate();

	const user = useSelector((store) => store.user);

	const handleButtonClick = () => {
		setShow(!show);
	};

	const handleSignOut = () => {
		signOut(auth)
			.then(() => {
				navigate("/");
			})
			.catch((error) => {
				navigate("/error");
			});
	};

	return (
		<div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
			<img
				className="w-48"
				src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-12-03/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt="logo"
			/>
			{user && (
				<div className="flex p-3">
					<img
						className="w-10 h-10 mt-2 rounded-lg"
						src="https://occ-0-1946-3663.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229
"
						alt="user-icon"
					/>
					<button
						className="py-2 px-4  text-3xl text-white hover:scale-125"
						onClick={handleButtonClick}
					>
						{" "}
						⠇
					</button>
					{show && (
						<div className="w-15 text-sm py-3 text-white ">
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
