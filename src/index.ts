import { waterfall, AsyncResultCallback } from 'async'
import App from './server'
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
        App.run()
        done()
    },

]


//RESPONSE CALLBACK
const cb: AsyncResultCallback<any, any> = (error, result) => {
    //HANDLE ERRORS (SERVER / DATABASE)
    if (error) process.exit(1)

    // 
    console.log(`SIIAPP [API] ON  http://localhost:${PORT}`);
}


waterfall(tasks, cb);