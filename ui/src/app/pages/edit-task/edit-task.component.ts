import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
})
export class EditTaskComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  taskId: string;
  listId: string;

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.listId = params.listId;
        this.taskId = params.taskId;
      }
    )
  }

  editTask(title: string) {
    this.taskService.editTask(this.listId, this.taskId,title).subscribe(() => {
      this.router.navigate(['/lists', this.listId]);
    })
  }

}
