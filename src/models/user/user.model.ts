import { Schema, model, SchemaOptions } from 'mongoose'
import { IUserDocument } from './user.interface'
import { hashPassword } from '../../security/';
import { compareSync } from 'bcrypt';
const tooavatar = require('cartoon-avatar')

const options: SchemaOptions = {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
    // versionKey: false,
    id: false,
    discriminatorKey: 'role'
}
const UserSchema: Schema = new Schema({
    avatar: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ['M', 'F', 'GL'], default: 'M' },
    age: { type: Number, default: 0 },
    isActive: { type: Boolean, default: false },
    isBlocked: { type: Boolean, default: false },
    notifications: [{ type: Schema.Types.ObjectId }]
}, options)



class UserClass {
    firstName: string;
    lastName: string;
    password: string

    get fullname() {
        return `${this.firstName} ${this.lastName}`
    }

    comparePassword(password: string) {
        return compareSync(password, this.password)

    }

}



UserSchema.loadClass(UserClass)

UserSchema.pre('save', function (next: Function) {

    const user = this as IUserDocument

    //Set avatar only when user is new 
    if (user.isNew)
        user.avatar = tooavatar.generate_avatar({ gender: user.gender === 'M' ? 'male' : 'female' })

    //  
    if (!user.isModified('password')) return next()

    else if (user.isNew && user.isModified('password')) {
        user.password = hashPassword(user.password)
        next()
    }

})


export default model<IUserDocument>('user', UserSchema)