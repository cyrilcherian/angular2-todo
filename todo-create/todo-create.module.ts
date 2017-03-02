import {ToDoCreate} from "./todo-create";
import {
    NgModule
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule} from '@angular/forms';

@NgModule({
    declarations: [ToDoCreate],
    imports: [BrowserModule, ReactiveFormsModule, FormsModule],
    exports: [ToDoCreate]
})
export class TodoCreateModule {}
