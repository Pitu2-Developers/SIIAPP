import { update, remove, create, _beforeAll } from './financial.callbacks';

describe('/api/student [TEST]', () => {
    beforeAll(_beforeAll)
    it.skip('should create a user with financial role', create)
    it.skip('should update a  user  with financial role by id', update)
    it('should remove a user with financial role by id', remove)
})