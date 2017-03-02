import { RouterModule, Routes } from '@angular/router';
import { ToDoList } from '../todo-list/todo-list';
import { ToDoEdit } from '../todo-edit/todo-edit';
import { ToDoCreate } from '../todo-create/todo-create';

const routes: Routes = [
  { path: '', redirectTo: 'todo-list', pathMatch: 'full' },
  { path: 'todo-list', component: ToDoList },
  { path: 'todo-edit/:id', component: ToDoEdit },
  { path: 'todo-create', component: ToDoCreate }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
