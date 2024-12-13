export interface TaskDatasource {
    findAll(): Promise<String[]>;
}
