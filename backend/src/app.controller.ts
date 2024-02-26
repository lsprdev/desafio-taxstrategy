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
 
  @Get('api/seed')
  async seed() {
    return this.authService.seedOrders();
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

  @Get('api/orders')
  async orders(@Request() req) {
    return this.authService.getOrders();
  }

  @Get('api/orders/:id')
  async order(@Request() req) {
    return this.authService.getOrder(req.params.id);
  }

  @Post('api/orders')
  async createOrder(@Request() req) {
    return this.authService.createOrder(req.body);
  }

  @Put('api/orders/:id')
  async updateOrder(@Request() req) {
    return this.authService.updateOrder(req.params.id, req.body);
  }

  @Delete('api/orders/:id')
  async deleteOrder(@Request() req) {
    return this.authService.deleteOrder(req.params.id);
  }
}
