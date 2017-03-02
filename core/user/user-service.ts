import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class UserService {

    private users = [{ "id": 1, "name": "Cyril" },
        { "id": 2, "name": "Sreeragh" },
        { "id": 3, "name": "Tia" }];
    constructor(private http: Http) { }
    getAll() {
        let p = new Promise((resolve) =>
            setTimeout(() => resolve(this.users), 500)
        )
        return Observable.fromPromise(p).map((responseData) => {
            return responseData;
        });
    }
    get(id: number) {
        let p = new Promise((resolve) =>
            setTimeout(() => {
                let user = this.users.find((d) => { return d.id == id });
                resolve(user)
            }, 500)
        )
        return Observable.fromPromise(p).map((responseData) => {
            return responseData;
        });
    }
    add(user) {
        let p = new Promise((resolve) =>
            setTimeout(() => {
                user.id = this.users.length + 1;
                this.users.push(user);
                resolve(user)
            }, 500)
        )
        return Observable.fromPromise(p).map((responseData) => {
            return responseData;
        });
    }

}
