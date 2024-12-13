import { Injectable } from '@nestjs/common';
import { TaskDatasource } from 'src/tasks/interfaces/task-datasource.interface';
import * as fs from 'fs';
import * as path from 'path';


@Injectable()
export class FileStorageDatasource implements TaskDatasource {

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
