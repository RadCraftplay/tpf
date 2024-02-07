import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import { Task } from './task';
import {doc} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private path = "aims"
  tasks: AngularFirestoreCollection<Task>;

  constructor(private db: AngularFirestore) {
    this.db = db
    this.tasks = db.collection(this.path)
  }

  getAllTasks(): AngularFirestoreCollection<Task> {
    return this.tasks
  }

  getTaskById(id: string): Observable<any> {
    const taskDoc = this.db.collection(this.path).doc(id);
    return taskDoc.valueChanges({ id: id });
  }

  getTaskByName(name: string): Observable<any[]> {
    return this.db.collection(this.path, ref => ref.where('name', '==', name)).valueChanges({ id: 'key' });
  }

  async addTask(task: Task): Promise<Task> {
    const docRef = await this.db.collection(this.path).add(JSON.parse(JSON.stringify(task)));
    task.id = docRef.id;
    return task;
  }

  async deleteTask(key: string): Promise<string> {
    await this.db.collection(this.path).doc(key).delete();
    return key
  }

  updateTask(task: Task): Promise<void> {
    return this.tasks.doc(task.id).set(task);
  }
}
