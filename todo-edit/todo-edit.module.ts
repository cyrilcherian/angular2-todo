import {ToDoEdit} from "./todo-edit";
import {
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';

@NgModule({
    declarations: [ToDoEdit],
    imports: [ BrowserModule, ReactiveFormsModule, FormsModule],
    exports: [ToDoEdit]
})
export class TodoEditModule {}
