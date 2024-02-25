import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class AdminGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const required = this.reflector.getAllAndOverride<boolean>('isAdmin', [
            context.getHandler(),
            context.getClass(),
        ]);

        if (required === undefined) {
            return false;
        }

        const { user } = context.switchToHttp().getRequest();

        return user?.isAdmin === required;
    }
}