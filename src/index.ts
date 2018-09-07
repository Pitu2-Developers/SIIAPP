import { waterfall, AsyncResultCallback } from 'async'
import Server from './server'
import { connect } from './models';
import { PORT } from './config';

const tasks: Function[] = [
    //CONNECT MONGODB 
    async (done: Function) => {
        try {
            const mongoResponse = await connect()
            done()
        } catch (error) {
            console.error(error);
            done(error)
        }
    },
    //RUN SERVER 
    (done: Function) => {
        Server.run()
        done()
    },

]


//RESPONSE CALLBACK
const cb: AsyncResultCallback<any, any> = (error, result) => {
    //HANDLE ERRORS (SERVER / DATABASE)
    if (error) process.exit(1)

    // 
    console.log(`Server on port http://localhost:${PORT}`);
}


waterfall(tasks, cb);