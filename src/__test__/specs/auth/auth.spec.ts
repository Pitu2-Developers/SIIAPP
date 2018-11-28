import { _beforeAll, logout, signin, signup } from './auth.callbacks'

describe(' /auth/* [TEST]', () => {
    beforeAll(_beforeAll)
    it.skip('should logout user and update isActive field', logout)
    it.skip('should POST /auth/signin response 200', signin)
    it.skip('should create a student /api/student POST response 201', signup)
})