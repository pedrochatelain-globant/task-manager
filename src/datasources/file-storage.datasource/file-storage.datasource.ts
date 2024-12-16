import { Injectable } from '@nestjs/common';
import { TaskDatasource } from 'src/tasks/interfaces/task-datasource.interface';
import * as fs from 'fs';
import * as path from 'path';
import { ResponseCreateTaskDTO } from 'src/tasks/dtos/response-create-task.dto';


@Injectable()
export class FileStorageDatasource implements TaskDatasource {

    async create(task: String): Promise<ResponseCreateTaskDTO> {
        try {
            // Append the task to the file
            await fs.promises.appendFile(this.filePath, '\n' + task, 'utf8'); // Adding a newline after each task
            return {
                status_code: 201,
                message: 'Task successfully created and saved to file.'
            };
        } catch (error) {
            // Handle any file I/O errors
            return {
                status_code: 500,
                message: 'Failed to save task to file. '
            };
        }
    }

    // Resolve the path to data.txt located in the 'src' folder
    private filePath = path.resolve(process.cwd(), 'src', 'data.txt');

    async findAll(): Promise<String[]> {
        try {
            const data = await fs.promises.readFile(this.filePath, 'utf-8'); // Read file asynchronously
            return data.split('\n') // Split the content by line and return as an array of strings
                .map(line => line.replace(/\r$/, '')); // Remove the carriage return at the end of each line
          } catch (error) {
            console.error('Error reading file:', error);
            throw new Error('Unable to read file');
          }
    }

}
