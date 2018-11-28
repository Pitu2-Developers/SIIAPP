import { create } from "./school-year.callbacks";
import { remove, _beforeAll } from "../enrollment-process/enrollment-process.callbacks";



describe('School year [TEST]', () => {
    beforeAll(_beforeAll)
    it.skip('should create a school year', create)
    it.skip('should remove a school year', remove)
})