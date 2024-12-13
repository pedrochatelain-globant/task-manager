import { Inject, Injectable } from '@nestjs/common';
import { TaskDatasource } from './interfaces/task-datasource.interface';

@Injectable()
export class TasksService {

    constructor(@Inject('TaskDatasource') private readonly dataSource: TaskDatasource) {}

    async getTasks(): Promise<String[]> {
        return this.dataSource.findAll()
    }

    // public addTask(task: String): void {
    //     this.dataSource.addTask(task)
    // }

}
