import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { InMemoryDatasource } from './datasources/in-memory.datasource/in-memory.datasource';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService, InMemoryDatasource],
})
export class AppModule {}
