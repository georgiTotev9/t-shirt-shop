export const validateLogin = (email, password) => {
    if (!email || !password) {
        return 'You should fill all the required fields.';
    }
};

export const validateRegister = (email, password, name, confirmPassword) => {
    if (!email || !password || !name) {
        return 'You should fill all the required fields.';
    }

    if (password !== confirmPassword) return 'Passwords do not match!';
};
