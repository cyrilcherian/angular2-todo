import {
    NgModule,
    Component
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ToDo } from "./app";
import { TodoListModule } from "../todo-list/todo-list.module"
import { TodoEditModule } from "../todo-edit/todo-edit.module"
import { TodoCreateModule } from "../todo-create/todo-create.module"
import { CoreModule } from "../core/core.module";
import { routing } from '../routes/routes';
@NgModule({
    declarations: [],
    imports: [BrowserModule, TodoListModule, TodoEditModule, TodoCreateModule, CoreModule, routing],
    bootstrap: [ToDo],
})
export class ToDoAppModule {}
