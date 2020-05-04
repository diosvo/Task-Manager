import { WebRequestService } from './web-request.service';
import { Injectable } from '@angular/core';
import { Task } from './models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestService) { }

  //  === LIST ====

  getLists() {
    return this.webReqService.get('lists');
  }
  createList(title: string) {
    // Send REQUEST to create a list
    return this.webReqService.post('lists', { title });
  }

  editList(id: string, title: string) {
    return this.webReqService.patch(`lists/${id}`, { title });
  }

  deleteList(id: string) {
    return this.webReqService.delete(`lists/${id}`);
  }

  // === TASK ===

  getTasks(listId: string) {
    return this.webReqService.get(`lists/${listId}/tasks`);
  }
  createTask(title: string, listId: string) {
    return this.webReqService.post(`lists/${listId}/tasks`, { title });
  }
  complete(task: Task) {
    return this.webReqService.patch(`lists/${task._listId}/tasks/${task._id}`, {
      completed: !task.completed
    });
  }
}
