import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Employees } from './contact.model';

@Injectable({ providedIn: 'root' })
export class ContactService {
  private posts: Employees[] = [];
  private postsUpdated = new Subject<Employees[]>();

  getPosts() {
    return [...this.posts];
  }

  getPostUpdateListener() {
    return this.postsUpdated.asObservable();
  }

  addPost(userName: string, post: string) {
    const data: Employees = { userName: userName, post: post };
    this.posts.push(data);
    this.postsUpdated.next([...this.posts]);
  }
}
