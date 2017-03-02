import {Http} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/observable/fromPromise';

@Injectable()
export class TaskService {

    private tasks = [{ "id": 1, "description": "reading angular 2", "done": false, user_id: 1 },
        { "id": 2, "description": "making angular 1 demo", "done": true, user_id: 1 },
        { "id": 3, "description": "making POC on angular 2", "done": false, user_id: 2 }];
    constructor(private http: Http) { }
    getAll() {
        let p = new Promise((resolve) =>
            setTimeout(() => resolve(this.tasks), 500)
        )
        return Observable.fromPromise(p).map((responseData) => {
            return responseData;
        });
    }
    get(id: number) {
        let p = new Promise((resolve) =>
            setTimeout(() => {
                let task = this.tasks.find((d) => {return d.id == id});
                console.log(task)
                resolve(task)
            }, 100)
        )
        return Observable.fromPromise(p).map((responseData) => {
            return responseData;
        });
    }
    add(task) {
        let p = new Promise((resolve) =>
            setTimeout(() => {
                task.id = this.tasks.length+1;
                this.tasks.push(task);
                resolve(task)
            }, 100)
        )
        return Observable.fromPromise(p).map((responseData) => {
            return responseData;
        });
    }

}
