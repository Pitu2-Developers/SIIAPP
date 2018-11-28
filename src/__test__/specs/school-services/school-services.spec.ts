import { _beforeAll, update } from "./school-services.callbacks";

describe('/api/student [TEST]', () => {
    beforeAll(_beforeAll)
    it.skip('should update a student by id', update)
})