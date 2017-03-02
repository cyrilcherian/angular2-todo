import {
    NgModule
} from '@angular/core';
import {TaskService} from './task-service'
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [],
    imports: [HttpModule],
    providers: [TaskService]
})
export class TaskModule {}
