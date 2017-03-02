import {ToDoList} from "./todo-list";
import {
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
@NgModule({
    declarations: [ToDoList],
    imports: [BrowserModule, FormsModule],
    exports: [ToDoList]
})
export class TodoListModule { }
