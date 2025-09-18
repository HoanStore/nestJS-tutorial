import { Injectable } from '@nestjs/common';

@Injectable()
export class HelloService {
  getMessage(): string {
    return 'Hello from Service Test!';
  }
}