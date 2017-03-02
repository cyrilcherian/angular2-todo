/**
 * A basic hello-world Angular 2 app
 */
 import {
     Component,
     Input,
     Output,
     OnInit,
     OnDestroy
 } from '@angular/core';
import {TaskService} from "../core/task/task-service";
import {UserService} from "../core/user/user-service";
import { ActivatedRoute, Router } from '@angular/router';
import {Subscription} from "rxjs/Subscription";
import {  FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'todo-create',
  templateUrl: "todo-create/todo-create.html"
})
export class ToDoCreate{
  task : any = {};
  users: Array<any>;
  selected: any;
  myForm: FormGroup = this.builder.group({
    description: this.description,
    done: this.done,
    user: this.user
  });
  description = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  done = new FormControl(false);
  user = new FormControl({});

  constructor(private router: Router, private builder : FormBuilder, private taskService: TaskService, private route: ActivatedRoute, private userService: UserService){
    this.userService.getAll().subscribe(data => {
        this.users = data as Array<any>;
        this.selected = this.users[0];
        console.log(this.users);
    });
  }
  createTask() {
    this.task.user_id = this.selected.id;
    this.taskService.add(this.task).subscribe((d)=>this.router.navigate(['/todo-list']));
  }
  userSelected($event){
    console.log(this.selected);
  }
}
