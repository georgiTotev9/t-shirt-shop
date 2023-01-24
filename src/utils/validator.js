export const validateLogin = (email, password) => {
    if (!email || !password) {
        return 'You should fill all the required fields!';
    }
};

export const validateRegister = (email, password, name, confirmPassword) => {
    if (!email || !password || !name) {
        return 'You should fill all the required fields!';
    }

    if (password.length < 6) return 'Password must be at least 6 characters!';

    if (password.length > 20) return 'Password must be less than 20 characters!';

    if (password !== confirmPassword) return 'Passwords do not match!';
};
