import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { ResponseCreateTaskDTO } from './dtos/response-create-task.dto';

@Controller('tasks')
export class TasksController {

    constructor(private readonly tasksService: TasksService) {}
    
    @Get()
    async getTasks(): Promise<String[]> {
        return this.tasksService.getTasks()
    }

    @Post()
    async addTask(@Body() task: String): Promise<ResponseCreateTaskDTO> {
        return this.tasksService.addTask(task)
    }

}
