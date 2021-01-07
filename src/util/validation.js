export const validation = val =>{
    if(val.length <=6){
        return {
            errorText:'password shoud contain 6 charachters',
            isValid: true
        }
    }
    return{
        errorText:'',
        isValid: false
    }
}