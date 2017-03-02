import {
    NgModule
} from '@angular/core';
import {UserService} from './user-service'
import { HttpModule } from '@angular/http';

@NgModule({
    declarations: [],
    imports: [HttpModule],
    providers: [UserService]
})
export class UserModule {}
