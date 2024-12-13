import { Injectable } from '@nestjs/common';
import { InMemoryDatasource } from 'src/datasources/in-memory.datasource/in-memory.datasource';

@Injectable()
export class TasksService {

    constructor(private readonly dataSource: InMemoryDatasource) {}

    public getTasks(): String[] {
        return this.dataSource.getTasks()
    }

    public addTask(task: String): void {
        this.dataSource.addTask(task)
    }

}
