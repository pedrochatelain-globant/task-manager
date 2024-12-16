export class ResponseCreateTaskDTO {
    readonly status_code: number;
    readonly message: string;
  
    constructor(status_code: number, message: string) {
      this.status_code = status_code;
      this.message = message;
    }
  }