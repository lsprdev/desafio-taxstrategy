import { Controller, Get, Post, Put, Delete, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { AdminOnly } from './auth/is-admin.decorator';
import { AdminGuard } from './auth/is-admin.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
  constructor(
    private authService: AuthService
  ) { }

  @Get('/')
  async index() {
    return {
      message: 'API desenvolvida por @lsprgabriel',
      data: {
        version: '1.0.0',
      },
    };
  }

  @Post('api/signup')
  async signup(@Request() req) {
    return this.authService.signup(req.body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('api/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @AdminOnly()
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('api/users')
  async users(@Request() req) {
    return this.authService.getUsers();
  }

  @AdminOnly()
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Get('api/user/:id')
  async user(@Request() req) {
    return this.authService.getUser(req.params.id);
  }

  @AdminOnly()
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Put('api/user/:id')
  async updateUser(@Request() req) {
    return this.authService.updateUser(req.params.id, req.body);
  }

  @AdminOnly()
  @UseGuards(JwtAuthGuard, AdminGuard)
  @Delete('api/user/:id')
  async deleteUser(@Request() req) {
    return this.authService.deleteUser(req.params.id);
  }
}
