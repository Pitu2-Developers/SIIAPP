import { _beforeAll } from "../api/api.callbacks";
import { create } from "./admin.callbacks";


describe('/admin/* [TEST]', () => {
    beforeAll(_beforeAll)
    it.skip('should create a admin', create)

})