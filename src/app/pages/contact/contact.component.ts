import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Employees } from './contact.model';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  posts: Employees[] = [];
  private postsSub: Subscription;

  checked = false;
  indeterminate = false;
  constructor(public contactData: ContactService) {}

  saveContact(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.contactData.addPost(form.value.userName, form.value.post);
    form.resetForm();
  }

  ngOnInit() {
    this.posts = this.contactData.getPosts();
    this.postsSub = this.contactData.getPostUpdateListener()
    .subscribe((posts : Employees[])=>{
      this.posts = posts;
    })
  }
  // employees = [
  //   {
  //     select: 'Hari',
  //     position: 'Full stack developer',
  //     image: 'assets/profile.jpg'
  //   },
  //   {
  //     select: 'Sujith',
  //     position: 'Full stack developer',
  //     image: 'assets/man.jpeg'
  //   },
  //   {
  //     select: 'Ramya',
  //     position: 'Full stack developer',
  //     image: 'assets/noavatar.png'
  //   },
  //   {
  //     select: 'Sree',
  //     position: 'Full stack developer',
  //     image: 'assets/profile.jpg'
  //   },
  //   {
  //     select: 'Sruthy',
  //     position: 'Full stack developer',
  //     image: 'assets/noavatar.png'
  //   },
  //   {
  //     select: 'Fahad',
  //     position: 'Full stack developer',
  //     image: 'assets/profile.jpg'
  //   }
  // ];
}
