import { update, remove, create, _beforeAll } from './student.callbacks';

describe('/api/student [TEST]', () => {
    beforeAll(_beforeAll)
    it.skip('should update a student by id', update)
    it.skip('should remove a student by ID', remove)
    it.skip('should create socio economic data', create)
})