import { IError } from "../types";

export function getCareer(career: number): string {
    switch (career) {
        case 1:
            return 'Sistemas Computacionales'
        case 2: return 'Industrial'

    }


}

export function handleError(error: any): IError {
    // console.log(error);

    const status = error.status || 500
    // ctx.status = status
    // console.log("ERROR");
    if (status === 500) return { status, message: 'Server error :(' }
    return { status, message: error.message }
    // console.log(error);
    // ctx.body = error
}