import { Controller, Get } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}
    
    @Get()
    async getTasks(): Promise<String[]> {
        return this.tasksService.getTasks()
    }

}
