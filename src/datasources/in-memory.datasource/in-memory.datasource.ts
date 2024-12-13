import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryDatasource {

    private tasks: String[] = ["task 1", "task 2 ", "task 3"]
    
    public addTask(task: String) {
        this.tasks.push(task)
    }

    public getTasks(): String[] {
        return this.tasks
    }

}
