import { OnConnect, OnDisconnect, SocketController, ConnectedSocket, OnMessage, MessageBody } from 'socket-controllers'
import { Socket } from 'socket.io';

@SocketController()
export class NotificationController {

    @OnConnect()
    connection(@ConnectedSocket() socket: Socket) {
        console.log(`Socket ID : ${socket.id}`);
    }

    @OnDisconnect()
    disconnect(@ConnectedSocket() socket: Socket) {
        console.log(`Socket ${socket.id} disconnected`);
    }


    @OnMessage('test')
    test(@ConnectedSocket() socket: Socket, @MessageBody() message: any) {
        console.log(`Socket ID emitted [TEST] ${socket.id}`);
        console.log(`DATA: ${message}`);


    }





}