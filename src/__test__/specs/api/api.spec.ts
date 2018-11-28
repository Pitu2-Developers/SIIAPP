
import { _beforeAll, addSubjects, getAllStudents } from './api.callbacks';

describe('/api/* [TEST]', () => {
    beforeAll(_beforeAll)
    it.skip('should add new subjects', addSubjects)
    it.skip('should get all students', getAllStudents)
})