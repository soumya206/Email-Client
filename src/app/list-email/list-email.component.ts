import { Component, OnInit } from '@angular/core';
import {Email} from '../email'
import {EmailService} from '../email.service';

@Component({
  selector: 'app-list-email',
  templateUrl: './list-email.component.html',
  styleUrls: ['./list-email.component.css']
})
export class ListEmailComponent implements OnInit {
  emails: Email[];
  constructor(private emailService: EmailService) { }

  ngOnInit() {
    this.getEmails();
  }

  getEmails(): void {
    this.emailService.getEmails().subscribe(emails=>this.emails=emails);
  }

}
