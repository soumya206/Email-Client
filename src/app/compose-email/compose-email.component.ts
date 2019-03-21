import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compose-email',
  templateUrl: './compose-email.component.html',
  styleUrls: ['./compose-email.component.css']
})
export class ComposeEmailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSend():void{
    //pass email object into the email service to be implemented
  }

}
