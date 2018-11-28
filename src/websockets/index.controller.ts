import { OnConnect, OnDisconnect, SocketController, ConnectedSocket, OnMessage, MessageBody } from 'socket-controllers'
import { Socket } from 'socket.io';
import { DOCUMENTS } from './controller-types';

@SocketController()
export class IndexController {

    @OnConnect()
    connection(@ConnectedSocket() socket: Socket) {
        console.log(`Socket ID : ${socket.id}`);
    }

    @OnDisconnect()
    disconnect(@ConnectedSocket() socket: Socket) {
        console.log(`Socket ${socket.id} disconnected`);
    }


    @OnMessage(DOCUMENTS.SEND)
    test(@ConnectedSocket() socket: Socket, @MessageBody() message: any) {
        console.log(`Socket ID emitted [TEST] ${socket.id}`);
        console.log(`DATA: ${message}`);


    }





}