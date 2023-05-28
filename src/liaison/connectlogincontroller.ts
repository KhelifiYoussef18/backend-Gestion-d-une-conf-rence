import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './connectloginservice';


@Controller('auth')
export class AuthController {
  constructor(private readonly userService: UserService) {}

  @Post('login')
  async login(@Body() body: { username: string, password: string }): Promise<{ token: string }> {
    const user = await this.userService.findByUsername(body.username);
    if (user && user.password === body.password) {
      const token = 'generate token here';
      return { token };
    } else {
      throw new Error('Invalid username or password');
    }
  }
}
