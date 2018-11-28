import { _beforeAll, update, remove, create, addSubject } from "./group.callbacks";


describe('/api/* [TEST]', () => {
    beforeAll(_beforeAll)


    it.skip('should update a group by id', update)

    it.skip('should create a new group', create)

    it.skip('should remove a group by ID', remove)

    it.skip('should add a new subject in a specific group', addSubject)


})