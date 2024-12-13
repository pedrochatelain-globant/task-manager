import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { InMemoryDatasource } from 'src/datasources/in-memory.datasource/in-memory.datasource';

@Module({
  controllers: [TasksController],
  providers: [TasksService, InMemoryDatasource]
})
export class TasksModule {}
