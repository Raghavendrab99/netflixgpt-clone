export const checkValidData = (email, password) => {

    const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);

    const isPasswordValid = /^(?=(\D*\d){2})(?=.*?[a-z])(?=.*?[A-Z]).{6,15}$/.test(password);

    if (!isEmailValid) {
        return "Email id not valid"
    };
    if (!isPasswordValid) {
        return "Password is not valid"
    }
    return null;

};
