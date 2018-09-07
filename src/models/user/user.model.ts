import { Schema, model, SchemaOptions } from 'mongoose'
import { IUserDocument } from './user.interface'
import { hashPassword } from '../../helpers/user.helpers';
import { compareSync } from 'bcrypt';
const tooavatar = require('cartoon-avatar')

const options: SchemaOptions = {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
    timestamps: true,
    versionKey: false,
    id: false
}

const UserSchema: Schema = new Schema({
    avatar: { type: String },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, enum: ['M', 'F'], default: 'M' },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActive: { type: Boolean, default: false },

}, options)


UserSchema.virtual('fullname')
    .get(function () {
        return `${this.firstName} ${this.lastName}`
    })

UserSchema.methods.comparePassword = function (password: string) {
    return compareSync(password, this.password)
}

UserSchema.pre('save', function (next: Function) {
    const user = this as IUserDocument

    if (!user.isModified('password')) return next()
    else if (user.isNew || user.isModified('password')) {
        user.password = hashPassword(user.password)
        user.avatar = tooavatar.generate_avatar({ gender: user.gender === 'M' ? 'male' : 'female' })
        next()
    }

})


export default model<IUserDocument>('User', UserSchema)