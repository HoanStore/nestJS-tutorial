import { Module } from '@nestjs/common';
import { HelloModule } from './hello/hello.module';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [HelloModule, TodosModule],
})
export class AppModule {}
