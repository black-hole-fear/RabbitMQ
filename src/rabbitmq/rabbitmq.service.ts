import { Injectable, OnModuleDestroy, OnModuleInit } from "@nestjs/common";
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';

@Injectable()
export class RabbitMQService implements OnModuleInit, OnModuleDestroy {
    private client: ClientProxy;

    onModuleInit() {
        this.client = ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: ['amqp://localhost:5672'],
                queue: 'cats_queue',
                queueOptions: {
                    durable: false,
                }
            }
        })
    }

    onModuleDestroy() {
        this.client.close();
    }

    send(pattern: string, data: unknown) {
        return this.client.send(pattern, data).toPromise();
    }
}