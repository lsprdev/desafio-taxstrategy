import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Order, Prisma } from '@prisma/client';

@Injectable()
export class OrdersService {
    constructor(private prisma: PrismaService) { }

    async order(
        orderWhereUniqueInput: Prisma.OrderWhereUniqueInput,
    ): Promise<Order | null> {
        return this.prisma.order.findUnique({
            where: orderWhereUniqueInput,
        });
    }

    async orders(params: {
        skip?: number;
        take?: number;
        cursor?: Prisma.OrderWhereUniqueInput;
        where?: Prisma.OrderWhereInput;
        orderBy?: Prisma.OrderOrderByWithRelationInput;
    }): Promise<Order[]> {
        const { skip, take, cursor, where, orderBy } = params;
        return this.prisma.order.findMany({
            skip,
            take,
            cursor,
            where,
            orderBy,
        });
    }

    async createOrder(data: Prisma.OrderCreateInput): Promise<Order> {
        return this.prisma.order.create({
            data,
        });
    }

    async createOrders(data: Prisma.OrderCreateInput[]): Promise<Prisma.BatchPayload> {
        return this.prisma.order.createMany({
            data,
        });
    }

    async updateOrder(params: {
        where: Prisma.OrderWhereUniqueInput;
        data: Prisma.OrderUpdateInput;
    }): Promise<Order> {
        const { where, data } = params;
        return this.prisma.order.update({
            data,
            where,
        });
    }

    async updateOrders(params: {
        where: Prisma.OrderWhereUniqueInput;
        data: Prisma.OrderUpdateManyMutationInput;
    }): Promise<Prisma.BatchPayload> {
        const { where, data } = params;
        return this.prisma.order.updateMany({
            data,
            where,
        });
    }

    async deleteOrder(where: Prisma.OrderWhereUniqueInput): Promise<Order> {
        return this.prisma.order.delete({
            where,
        });
    }

    async deleteOrders(where: Prisma.OrderWhereUniqueInput): Promise<Prisma.BatchPayload> {
        return this.prisma.order.deleteMany({
            where,
        });
    }
}