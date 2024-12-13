import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { InMemoryDatasource } from 'src/datasources/in-memory.datasource/in-memory.datasource';

@Module({
  controllers: [TasksController],
  providers: [
    TasksService,
    {
      provide: 'TaskDatasource',  // Use the interface to bind the implementation
      useClass: InMemoryDatasource, // Make sure InMemoryDatasource implements TaskDatasource interface
    },
  ]
})
export class TasksModule {}
