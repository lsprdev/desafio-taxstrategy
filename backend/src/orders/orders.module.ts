import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
    imports: [PrismaModule],
    providers: [OrdersService],
    exports: [OrdersService],
})
export class UsersModule { }