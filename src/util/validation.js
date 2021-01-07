export const validation = (values) => {
    if(values === "") {
        return "Email or Password fields are required"
    } else if(values.length < 6) {
        return "Password or email can't contain less then 6 characters"
    } else {
        return "You have successfully logged in!";
    }
}