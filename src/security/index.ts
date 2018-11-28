import { decode, encode } from 'jwt-simple'
import * as moment from 'moment'
import { ID, TokenPayload, TokenDecodedPayload } from '../types/'
import { SECRET_TOKEN, SALT_FACTOR } from '../config';
import { genSaltSync, hashSync } from 'bcrypt';

export function hashPassword(password: string): string {
    const salt: string = genSaltSync(SALT_FACTOR)
    return hashSync(password, salt)
}


export class SecurityService {

    decodeToken(token: string): Promise<TokenDecodedPayload> {

        const promise: Promise<any> = new Promise((resolve, reject) => {
            try {

                if (token.length === 0)
                    reject({ message: 'Invalid token', status: 401 })


                const { exp, sub, role }: TokenPayload = decode(token, SECRET_TOKEN)

                if (exp <= moment().unix())
                    reject({ status: 500, message: 'Token has expired' })
                return resolve({ sub, role })

            } catch (error) {
                reject({ status: 500, message: 'Server error', error })
            }
        })

        return promise

    }


    generateToken({ sub, role }: TokenDecodedPayload): string {
        const payload: TokenPayload = {
            sub,
            role,
            iat: moment().unix(),
            exp: moment().add(1, 'days').unix()
        }

        return encode(payload, SECRET_TOKEN)
    }


    isAuth(token: string): boolean {
        try {
            const payload: any = decode(token, SECRET_TOKEN)
            if (payload.exp <= moment().unix())
                return false
            return true
        } catch (error) {
            return false
        }
    }

}
