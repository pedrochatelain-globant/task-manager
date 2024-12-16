import { ResponseCreateTaskDTO } from "../dtos/response-create-task.dto";

export interface TaskDatasource {
    findAll(): Promise<String[]>;
    create(task: String): Promise<ResponseCreateTaskDTO>
}
