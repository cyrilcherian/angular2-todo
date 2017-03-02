export class Task {
  description: string;
  done: boolean;
  id: number;
  constructor(id, desc, done) {
    this.description = desc;
    this.done = done;
    this.id = id;
  }
}
