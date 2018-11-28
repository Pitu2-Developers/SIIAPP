import { Document } from 'mongoose'

export interface IUserModel {
    avatar?: string,
    email: string,
    password: string,
    firstName: string,
    lastName: string,
    gender: string,
    age: number,
    isActive?: boolean,
    isBlocked?: boolean
}

export interface IUserDocument extends Document, IUserModel {
    comparePassword: (password: string) => boolean,
    fullname?: string,
    role: string
}