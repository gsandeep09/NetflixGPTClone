
 export const CheckValidation=(email,password)=>{

    const Email=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const Password=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if(!Email) return "Email Id is not valid";
    if(!Password) return "Password is not valid";

    return null;

};