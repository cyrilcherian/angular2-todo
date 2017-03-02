import {
    NgModule
} from '@angular/core';
import {TaskModule} from "./task/task.module";
import {UserModule} from "./user/user.module";

@NgModule({
    declarations: [],
    imports: [TaskModule, UserModule],
    exports: [TaskModule, UserModule]
})
export class CoreModule { }
