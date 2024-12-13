import { Injectable } from '@nestjs/common';
import { TaskDatasource } from 'src/tasks/interfaces/task-datasource.interface';

@Injectable()
export class InMemoryDatasource implements TaskDatasource{
    
    private tasks: String[] = ["task 1", "task 2 ", "task 3"]
    
    async findAll(): Promise<String[]> {
        return this.tasks
    }

    public addTask(task: String) {
        this.tasks.push(task)
    }

}
