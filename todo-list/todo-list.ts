/**
 * A basic hello-world Angular 2 app
 */
import {
    Component,
    Input,
    Output,
    OnInit
} from '@angular/core';
import {TaskService} from "../core/task/task-service";
import {UserService} from "../core/user/user-service";
import {Router} from "@angular/router";

@Component({
    selector: 'todo-list',
    templateUrl: "todo-list/todo-list.html"
})
export class ToDoList implements OnInit {
    tasks: Array<any>;
    users: Array<any>;
    selected: any;
    constructor(private taskService: TaskService, private userService: UserService, private router: Router) { }
    ngOnInit() {
        this.taskService.getAll().subscribe(data => this.tasks = data as Array<any>);
        this.userService.getAll().subscribe(data => {
            this.users = data as Array<any>;
            this.users = JSON.parse(JSON.stringify(this.users));
            let all = { "id": 0, "name": "All" };
            this.users.unshift(all);
            this.selected = all;
        });
    }
    onClick(task) {
        this.router.navigate(['/todo-edit', task.id]);
    }
    create() {
        this.router.navigate(['/todo-create']);
    }
    userSelected() {
        this.taskService.getAll().subscribe(data => {
          let tasks = data as Array<any>;
          if (this.selected.id == 0) {
            this.tasks = tasks;
            return;
          }
          this.tasks = tasks.filter((task) => {
            return task.user_id == this.selected.id;
          });
        });
    }

}
