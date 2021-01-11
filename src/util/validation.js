export const ValidateEmail = (val) => {
   if(val.includes(" ")){
        return "Email or Password fields are required"
    }else{
        return "You have successfully logged in!";
    }
}


export const ValidatePassword = (val) => {
    if (val.length < 8) {
        return "Password or email can't contain less then 6 characters"
    }else{
        return "You have successfully logged in!";
    }
}