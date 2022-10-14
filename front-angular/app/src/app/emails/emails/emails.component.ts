import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from './../../service/email.service';
import { Email } from './../../model/email';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent implements OnInit {

  emails: Email[] = [];

  constructor(
    private emailService: EmailService
  ) { }

  ngOnInit(): void {
    this.getEmails();
  }

  searchDate = new FormGroup({
    data: new FormControl('', Validators.required),
  });

  getEmails(): void {
    this.emailService.getEmails()
      .subscribe((data) => { this.emails = data;});
  }

  getEmailsByDate(): void {

  }

  onSubmit(){
    const date = String(this.searchDate.value.data)
    console.log('data', date)
    this.emailService.getByDate(date)
      .subscribe((data) => { this.emails = data;});
      this.searchDate.reset();
  }

}
