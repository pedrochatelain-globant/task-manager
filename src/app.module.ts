import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { InMemoryDatasource } from './datasources/in-memory.datasource/in-memory.datasource';
import { FileStorageDatasource } from './datasources/file-storage.datasource/file-storage.datasource';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService, InMemoryDatasource, FileStorageDatasource],
})
export class AppModule {}
