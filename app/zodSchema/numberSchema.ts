import { z } from "zod";
export const createNumberSchema = (fieldName:string,length:number)=>{
    return z.string()
            .length(length, `${fieldName} must be exactly ${length} digits`)
            .regex(/^\d+$/, `${fieldName} must contain only digits`)
}