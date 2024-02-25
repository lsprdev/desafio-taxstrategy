import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
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
                    }
                };
            }
        } catch (error) {
            return {
                message: 'Não foi possível realizar o login!',
                data: {},
            };
        }
    }

    // /api/users payload
    async getUsers() {
        try {
            const users = await this.usersService.users({});
            return {
                message: 'Usuários encontrados com sucesso!',
                data: users,
            };
        } catch (error) {
            return {
                message: 'Usuários não encontrados!',
                data: {},
            };
        }
    }

    // /api/users/:id payload
    async getUser(id: any) {
        try {
            const user = await this.usersService.user({ id: id });
            return {
                message: 'Usuário encontrado com sucesso!',
                data: user,
            };
        } catch (error) {
            return {
                message: 'Usuário não encontrado!',
                data: {},
            };
        }
    }

    async updateUser(id: any, user: any) {
        try {
            if (user.password) {
                user.password = await this.hashPassword(user.password);
            }
            const updatedUser = await this.usersService.updateUser({
                where: { id: id },
                data: user,
            });
            return {
                message: 'Usuário atualizado com sucesso!',
                data: updatedUser,
            };
        } catch (error) {
            return {
                message: 'Não foi possível atualizar o usuário!',
                data: {},
            };
        }
    }

    async deleteUser(id: any) {
        try {
            const deletedUser = await this.usersService.deleteUser({
                id: id,
            });
            return {
                message: 'Usuário deletado com sucesso!',
                data: deletedUser,
            };
        } catch (error) {
            return {
                message: 'Não foi possível deletar o usuário!',
                data: {},
            };
        }
    }
}