import { Component, OnInit, Input } from '@angular/core';
import {Email} from '../email';
import {ActivatedRoute} from '@angular/router';
import {EmailService} from '../email.service'

@Component({
  selector: 'app-view-email',
  templateUrl: './view-email.component.html',
  styleUrls: ['./view-email.component.css']
})
export class ViewEmailComponent implements OnInit {

  @Input() email: Email; //this component gets email object as a input
  constructor(
  private route: ActivatedRoute,
  private emailService: EmailService) {
  }

  ngOnInit() {
    this.getEmail();
  }

  getEmail(): void{
    const id= +this.route.snapshot.paramMap.get('id');
    this.emailService.getEmail(id).subscribe(email=>this.email=email);
  }

}
