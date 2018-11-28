import { IError } from "../types";
import User from '../models/user/user.model'
import { HTTP_500_INTERNAL_SERVER_ERROR } from "../controllers";

export async function checkEmailExists(email: string) {
    const count: number = await User.count({ email }).then((res: number) => res)

    return count >= 1 ? true : false
}


/*
    (0) Applicant
    (1) Software
    (2) Industrial
    (3) Food Industry 
    (4) Enviromental 
    (5) Business Management

*/


export function getCareer(career: number): string {
    switch (career) {
        case 1: return 'Software'
        case 2: return 'Industrial'
        case 3: return 'Food Industry'
        case 4: return 'Enviromental'
        case 5: return 'Business Management'

    }


}

export function handleError(error: any): IError {
    const status = error.status || HTTP_500_INTERNAL_SERVER_ERROR
    if (status === HTTP_500_INTERNAL_SERVER_ERROR) return { status, message: 'Server error :(' }
    return { status, message: error.message }
}