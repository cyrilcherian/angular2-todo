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
  selector: 'todo-edit',
  templateUrl: "todo-edit/todo-edit.html"
})
export class ToDoEdit implements OnInit, OnDestroy{
  task : any = {};
  sub: Subscription;
  myForm: FormGroup = this.builder.group({
    description: this.description,
    done: this.done
  });
  description = new FormControl('', [
    Validators.required,
    Validators.minLength(5)
  ]);
  done = new FormControl(false);

  constructor(private router: Router, private builder : FormBuilder, private taskService: TaskService, private userService: UserService, private route: ActivatedRoute){
  }
  editTask() {
    console.log(this.task);
    this.router.navigate(['/todo-list']);
  }
  ngOnInit(){
    this.sub = this.route.params.subscribe(params => {
        let id = +params['id']; // (+) converts string 'id' to a number
        this.taskService.get(id).subscribe(data => this.task = data as any);
    });
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
