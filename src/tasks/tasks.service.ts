import { Inject, Injectable } from '@nestjs/common';
import { TaskDatasource } from './interfaces/task-datasource.interface';
import { ResponseCreateTaskDTO } from './dtos/response-create-task.dto';

@Injectable()
export class TasksService {

    constructor(@Inject('TaskDatasource') private readonly dataSource: TaskDatasource) {}

    async getTasks(): Promise<String[]> {
        return this.dataSource.findAll()
    }

    public addTask(task: String): Promise<ResponseCreateTaskDTO> {
        return this.dataSource.create(task)
    }

}
