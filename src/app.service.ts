import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return 'Hello from the most annoying API ever -- cannot generate JS (even though compiles down to js)';
  }
}
