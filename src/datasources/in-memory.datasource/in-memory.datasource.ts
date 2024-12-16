import { Injectable } from '@nestjs/common';
import { ResponseCreateTaskDTO } from 'src/tasks/dtos/response-create-task.dto';
import { TaskDatasource } from 'src/tasks/interfaces/task-datasource.interface';

@Injectable()
export class InMemoryDatasource implements TaskDatasource{

    private tasks: String[] = ["task 1", "task 2 ", "task 3"]

    async create(task: String): Promise<ResponseCreateTaskDTO> {
        console.log("TASK: " + task)
        this.tasks.push(task)
        return new ResponseCreateTaskDTO(201, "Task succesfully created!")
    }
    
    async findAll(): Promise<String[]> {
        return this.tasks
    }

    public addTask(task: String) {
        this.tasks.push(task)
    }

}
