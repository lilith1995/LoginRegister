export const validation = val =>{
    console.log(val)
    if(val.length <=6){
        return {
            errorText:'fill in',
            isValid: true
        }
    }
    return{
        errorText:'',
        isValid: false
    }
}