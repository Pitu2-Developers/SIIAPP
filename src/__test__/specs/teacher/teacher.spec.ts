
import { _beforeAll, update, create, remove } from './teacher.callbacks';

describe('/api/* [TEST]', () => {
    beforeAll(_beforeAll)
    it.skip('should update a teacher by id', update)
    it.skip('should create a new teacher', create)
    it.skip('should remove a teacher by ID', remove)
})