export const checkValidData = (email, password) => {

	const isEmailVaild = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
		email
	);

	const isPasswordValid =
		/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
			password
		);

	if (!isEmailVaild) return "Email";
	if (!isPasswordValid) return "Password";

	return null;
};
