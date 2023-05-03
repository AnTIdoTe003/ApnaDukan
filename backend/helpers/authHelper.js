import bcrypt from "bcrypt"

export const hashPassword= async(passoword)=>{
    try{
        const saltRounds = 12
        const hashedPassword = await bcrypt.hash(passoword, saltRounds )
        return hashedPassword
    }catch(error){
        console.log(error)
    }
}

export const comparePassword= async(password, hashedPassword)=>{
    return bcrypt.compare(password, hashedPassword)
}