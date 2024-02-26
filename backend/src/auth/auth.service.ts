import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { OrdersService } from '../orders/orders.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { orderData, adminData } from './seed';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private ordersService: OrdersService,
        private jwtService: JwtService,
    ) { }

    async hashPassword(password: string): Promise<string> {
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    }

    async comparePasswords(plainTextPassword: string, hashedPassword: string): Promise<boolean> {
        return bcrypt.compare(plainTextPassword, hashedPassword);
    }

    async validateUser(email: string, pass: string): Promise<any> {
        const user = await this.usersService.user({ email: email });
        if (user && await this.comparePasswords(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }


    async signup(user: any) {
        try {
            const userExists = await this.usersService.user({ email: user.email });
            if (userExists) {
                return {
                    message: 'Usuário já existe!',
                    data: {},
                };
            } else {
                const hashedPassword = await this.hashPassword(user.password);
                const newUser = await this.usersService.createUser({
                    ...user,
                    password: hashedPassword,
                });
                const payload = {
                    id: newUser.id,
                    email: newUser.email,
                    isAdmin: newUser.isAdmin,
                };
                return {
                    message: 'Usuário criado com sucesso!',
                    data: {
                        ...payload,
                        access_token: this.jwtService.sign(payload),
                    }
                };
            }
        } catch (error) {
            return {
                message: 'Não foi possível criar o usuário!',
                data: {},
            };
        }
    }

    async login(user: any) {
        console.log(user);
        try {
            const userExists = await this.usersService.user({ email: user.email });
            if (!userExists) {
                return {
                    message: 'Usuário não existe!',
                    data: {},
                };
            } else {
                const payload = {
                    id: user.id,
                    email: user.email,
                    isAdmin: user.isAdmin,
                };
                return {
                    message: 'Login bem sucedido!',
                    data: {
                        ...payload,
                        access_token: this.jwtService.sign(payload),
                        status: 200,
                    }
                };
            }
        } catch (error) {
            return {
                message: 'Não foi possível realizar o login!',
                error: error,
            };
        }
    }

    async seedOrders() {
        try {
            const orders = await this.ordersService.orders({});
            const admin = await this.usersService.users({});
            if (orders.length === 0 && admin.length === 0) {
                const newOrders = await this.ordersService.createOrders(orderData);
                const newUser = await this.usersService.createUser(adminData);
                return {
                    message: 'Pedidos criados com sucesso!',
                    orderData: newOrders,
                    adminData: newUser,
                };
            } else {
                return {
                    message: 'Pedidos já existem!',
                    data: {},
                };
            }
        } catch (error) {
            return {
                message: 'Não foi possível criar os pedidos!',
                data: {},
            };
        }
    }

    async createOrder(order: any) {
        try {
            const newOrder = await this.ordersService.createOrder(order);
            return {
                message: 'Pedido criado com sucesso!',
                data: newOrder,
                status: 200,
            };
        } catch (error) {
            return {
                message: 'Não foi possível criar o pedido!',
                data: {},
            };
        }
    }

    async getOrders() {
        try {
            const orders = await this.ordersService.orders({});
            return {
                message: 'Pedidos encontrados com sucesso!',
                data: orders,
            };
        } catch (error) {
            return {
                message: 'Pedidos não encontrados!',
                data: {},
            };
        }
    }

    async getOrder(id: any) {
        try {
            const order = await this.ordersService.order({ id: id });
            return {
                message: 'Pedido encontrado com sucesso!',
                data: order,
            };
        } catch (error) {
            return {
                message: 'Pedido não encontrado!',
                data: {},
            };
        }
    }

    async updateOrder(id: any, order: any) {
        try {
            const updatedOrder = await this.ordersService.updateOrder({
                where: { id: id },
                data: order,
            });
            return {
                message: 'Pedido atualizado com sucesso!',
                data: updatedOrder,
            };
        } catch (error) {
            return {
                message: 'Não foi possível atualizar o pedido!',
                data: {},
            };
        }
    }

    async deleteOrder(id: any) {
        try {
            const deletedOrder = await this.ordersService.deleteOrder({ id: id });
            return {
                message: 'Pedido deletado com sucesso!',
                data: deletedOrder,
            };
        } catch (error) {
            return {
                message: 'Não foi possível deletar o pedido!',
                data: {},
            };
        }
    }


}